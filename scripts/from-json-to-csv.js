const { writeFileSync } = require('fs');
const { data } = require('../data/companies.json');

let csv = `Surat Tanda Berizin/Terdaftar,Nama Platform,Website,Nama Perusahaan,Tanggal,Jenis,Badan Hukum,Syariah,Alamat`;
data
  .sort((a, b) => {
    if (a.registered_at._seconds !== b.registered_at._seconds) {
      return a.registered_at._seconds - b.registered_at._seconds;
    } else {
      return a.registration > b.registration ? 1 : -1;
    }
  })
  .forEach(row => {
    const string = `\n${row.registration},${row.platform_name},"${row.website.join(', ')}",${
      row.company_name
    },${new Date(row.registered_at._seconds * 1000).toLocaleDateString()},${
      row.registration_type
    },${row.badan_hukum || ''},${row.is_syariah ? 'Syariah' : 'Konvensional'},"${(row.alamat &&
      row.alamat.replace(/\r?\n/g, '\\n')) ||
      ''}"`;
    csv += string;
  });

writeFileSync('jul2019.csv', csv);
