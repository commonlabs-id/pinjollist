const db = require('./database')
const records = require('../ojk2.json')

const getRef = r => db.collection('lending_services').doc(r['platform_name'])
const pushOne = (ref, data) => ref.set(data, {merge: true})

records.forEach(r => {
  console.log(r)
  const ref = getRef(r)
  // console.log(ref)
  pushOne(ref, r)
})

