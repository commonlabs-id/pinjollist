const fetch = require('isomorphic-unfetch');
const FieldValue = require('firebase-admin').firestore.FieldValue;

const ojk2 = require('../data/ojk2.json');

const db = require('./database');

const fetchCompaniesFromAPI = async () => {
  const result = await fetch('https://pinjollist.now.sh/api/companies');
  const { data } = await result.json();
  return data;
};

const matches = [];

const getRef = r => db.collection('lending_services').doc(r['platform_name']);
const mergeOne = (ref, data) => ref.set(data, { merge: true });

const main = async () => {
  const companiesFromAPI = await fetchCompaniesFromAPI();
  const oldCompanies = ojk2.map(({ raw }) => raw);
  for (let company of companiesFromAPI) {
    let hasMatching = false;
    const match = oldCompanies.find(c => {
      return (
        c['Nama Platform'] === company.platform_name ||
        c['Nama Perusahaan'] === company.company_name
      );
    });
    if (match) {
      hasMatching = true;
      matches.push({
        ...company,
        address: match['Alamat'],
      });
    }
    // console.log(company.platform_name, hasMatching ? 'has' : 'does not have', 'a match');
  }
  for (let company of matches) {
    const ref = getRef(company);
    mergeOne(ref, { alamat: company.address });
    ref.update({
      address: FieldValue.delete(),
    });
  }
};

main();
