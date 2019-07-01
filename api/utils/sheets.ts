import GoogleSpreadsheet from 'google-spreadsheet';
import { ServiceAccount } from '../types/common';

interface GoogleSheetsDoc {
  getInfo(callback: unknown): Promise<SheetsInfo>;
  getRows(index: number, opts: unknown, callback: unknown): Promise<Row[]>;
}

interface SheetsInfo {
  worksheets: Sheet[];
}

interface Sheet {
  title: string;
}

interface Row {
  [key: string]: unknown;
}

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

async function getInfo(doc: GoogleSheetsDoc): Promise<SheetsInfo> {
  return new Promise(resolve =>
    doc.getInfo((error: Error, info: SheetsInfo) => {
      if (error) {
        throw error;
      }
      resolve(info);
    }),
  );
}

async function getWorksheetIndexFromTitle(doc: GoogleSheetsDoc, title: string): Promise<number> {
  const { worksheets } = await getInfo(doc);
  return 1 + worksheets.findIndex(sheet => sheet.title === title);
}

async function getSheetsData(doc: GoogleSheetsDoc): Promise<Row[]> {
  const CMS_INDEX = await getWorksheetIndexFromTitle(doc, SHEET_TITLES.DATA);
  return new Promise(resolve => {
    doc.getRows(CMS_INDEX, {}, (err: Error, rows: Row[]) => {
      if (err) {
        throw new Error('Error getting CMS data');
      }

      resolve(rows);
    });
  });
}

async function sanitizeSheets(rows: Row[]): Promise<Row[]> {
  return rows.map(
    ({
      surattandaberizinterdaftar: registration,
      namaperusahaan: company_name,
      website,
      namaplatform: platform_name,
      tanggal,
      jenis: registration_type,
      badanhukum: badan_hukum,
      alamat,
      syariah: is_syariah,
    }) => ({
      registration,
      company_name,
      website,
      platform_name,
      registration_type,
      badan_hukum,
      is_syariah,
      alamat,
      registered_at: {
        _seconds: new Date(tanggal as string).getTime() / 1000,
      },
    }),
  );
}

export async function getSiteDataFromSheet(
  sheetId: string,
  serviceAccount: ServiceAccount,
): Promise<Row[]> {
  const doc = new GoogleSpreadsheet(sheetId);
  await new Promise(resolve => doc.useServiceAccountAuth(serviceAccount, resolve));
  return getSheetsData(doc).then(sanitizeSheets);
}

export default {
  getSiteDataFromSheet,
};
