const fs = require('fs');
const path = require('path');
const parse = require('csv-parse/lib/sync');

const db = require('./database');

const csv = fs.readFileSync(path.join('../', 'data', 'feb2019.csv'));
const opts = {
  columns: true,
  skip_empty_lines: true,
};

const sanitize = r => {
  const date = r['Tanggal']
    .split(' ')
    .map(month => {
      switch (month) {
        case 'Januari':
          return 'January';
        case 'Februari':
          return 'February';
        case 'Maret':
          return 'March';
        case 'Mei':
          return 'May';
        case 'Juni':
          return 'June';
        case 'Juli':
          return 'July';
        case 'Agustus':
          return 'August';
        case 'Oktober':
          return 'October';
        case 'Desember':
          return 'December';
        default:
          return month;
      }
    })
    .join(' ');
  return {
    company_name: r['Nama Perusahaan'],
    platform_name: r['Nama Platform'],
    registered_at: new Date(date),
    registration: r['Surat Tanda Berizin/Terdaftar'],
    registration_type: r['Jenis'],
    website: r['Website'].split(' '),
  };
};

const records = parse(csv, opts).map(sanitize);
const oldRecords = require('../data/ojk2.json');

const getRef = r => db.collection('lending_services').doc(r['platform_name']);
const pushOne = (ref, data) => ref.set(data);

console.log('Old length', oldRecords.length);
console.log('New length', records.length);

const data = records.map(r => {
  let rec = { ...r };
  oldRecords.reduceRight((_, o, index) => {
    if (o.raw && o.raw['Nomor Surat Terdaftar atau Izin'] === r.registration) {
      delete o.raw,
        (rec = {
          ...rec,
          ...o,
        });
      oldRecords.splice(index, 1);
    }
  });
  oldRecords.reduce((_, o, index) => {
    if (o.raw && o.raw['Nama Perusahaan'].toLowerCase() === r.company_name.toLowerCase()) {
      delete o.raw,
        (rec = {
          ...rec,
          ...o,
        });
      oldRecords.splice(index, 1);
    }
  });
  return rec;
});

console.log('Mismatched (ignored)', oldRecords.length);
console.log('Data', data.length);

oldRecords.forEach(o => {
  console.log(o.raw['Nama Platform']);
});
