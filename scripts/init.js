const fs = require('fs')
const path = require('path')
const parse = require('csv-parse/lib/sync')

const db = require('./database')

const csv = fs.readFileSync(path.join('../', 'feb2019.csv'))
const opts = {
  columns: true,
  skip_empty_lines: true
}

const sanitize = r => ({
  company_name: r['Nama Perusahaan'],
  platform_name: r['Nama Platform'],
  registered_at: r['Tanggal'],
  registration: r['Surat Tanda Berizin/Terdaftar'],
  registration_type: r['Jenis'],
  website: r['Website'].split(' ')
})

const records = parse(csv, opts).map(sanitize)

const getRef = r => db.collection('lending_services').doc(r['platform_name'])
const pushOne = (ref, data) => ref.set(data)

records.forEach(r => {
  const ref = getRef(r)
  pushOne(ref, r)
})

