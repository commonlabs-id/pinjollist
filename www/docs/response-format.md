# Format Response

Format response data diberikan dalam format JSON berikut. Properti `data` berisi data yang dikembalikan dari API, dan dapat memiliki tipe apapun (cth: string, object, array, dll.)

```json
{
  "status": "ok",
  "data": []
}
```

Apabila ada error dalam request API, status dalam respons akan berubah menjadi `error`, serta status HTTP 400 akan dikembalikan. Pesan error dari API juga akan dikembalikan dalam format berikut:

```json
{
  "status": "error",
  "data": {
    "message": "Oh no! An error has occured."
  }
}
```
