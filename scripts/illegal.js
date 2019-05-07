const { readFileSync } = require('fs');
const { join } = require('path');

const db = require('./database');

const getRef = _ => db.collection('illegal_lending_services').doc();
const mergeOne = (ref, data) => ref.set(data, { merge: true });

const rawTxt = readFileSync(join(__dirname, '..', 'data', 'illegal.txt'), {
  encoding: 'utf-8',
});

const linesWithWords = rawTxt
  .split('\n')
  .filter(l => !!l)
  .map(line => line.split('\t').join(' '));

const illegalCompanies = linesWithWords.map(line => {
  const [front, developer_name] = line.split(' dengan perusahaan developer ');
  const [_, platform_name] = front.split('. ');
  return { platform_name, developer_name };
});

illegalCompanies.forEach(company => {
  // console.log(company.developer_name);
  const ref = getRef(company);
  mergeOne(ref, company);
});
