## /companies

Mendapatkan daftar perusahaan _P2P lending_ yang terdaftar dan berizin oleh OJK.

### Request

```
GET https://pinjollist.now.sh/api/companies
```

### Response

```json
{
  "status": "ok",
  "data": [
    {
      "company_name": "PT Pembiayaan Digital Indonesia",
      "platform_name": "AdaKami",
      "registered_at": {
        "seconds": 1545325200,
        "nanoseconds": 0
      },
      "registration": "S-1108/NB.213/2018",
      "registration_type": "Terdaftar",
      "website": ["http://adakami.id"]
    },
    {
      "company_name": "PT Unikas Indonesia Pasifik",
      "platform_name": "AdaKita",
      "registered_at": {
        "seconds": 1548954000,
        "nanoseconds": 0
      },
      "registration": "S-57/NB.213/2019",
      "registration_type": "Terdaftar",
      "website": ["www.adakita.co.id"]
    }
    // [...]
  ]
}
```
