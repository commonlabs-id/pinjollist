import GoogleSpreadsheet from 'google-spreadsheet';
import { ServiceAccount } from '../types/common';

if (
  !process.env.SHEETS_ID ||
  !process.env.FIREBASE_CLIENT_EMAIL ||
  !process.env.FIREBASE_PRIVATE_KEY_BASE64
) {
  throw new Error('Missing environment variables');
}

const SHEET_TITLES = Object.freeze({
  DATA: 'Data',
});

async function getWorksheetIndexFromTitle(doc, title) {
  const { worksheets } = await getInfo(doc);
  return 1 + worksheets.findIndex(sheet => sheet.title === title);
}

async function getCMSData(doc) {
  const CMS_INDEX = await getWorksheetIndexFromTitle(doc, SHEET_TITLES.DATA);
  return new Promise(resolve => {
    doc.getRows(
      CMS_INDEX,
      {
        offset: 1,
      },
      (err, rows) => {
        if (err) {
          throw new Error('Error getting CMS data');
        }

        resolve(rows);
      },
    );
  });
}

async function getInfo(doc: unknown) {
  return new Promise((resolve, reject) =>
    doc.getInfo((error, info) => {
      if (error) {
        return reject(error);
      }
      resolve(info);
    }),
  );
}

async function getSiteDataFromSheet(
  sheetId: string,
  serviceAccount: ServiceAccount,
): Promise<unknown> {
  const doc = new GoogleSpreadsheet(sheetId);
  await new Promise(resolve => doc.useServiceAccountAuth(serviceAccount, resolve));
  return getCMSData(doc);
}

// getSiteDataFromSheet('1vbbQG3IPSxJl9dAcGA9xmP5kWGNPF75QGlPA5gpApI0', serviceAccount)
//   .then(console.log)
//   .catch(console.error);
module.exports = { getSiteDataFromSheet };
