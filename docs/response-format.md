# Response Format

The default response format is as follows. A data can be an object of responses, or data

```json
{
  "status": "ok",
  "data": []
}
```

If there's an error in the request, the response will generate a HTTP 400 error, return a status of `error`, and display the error message as follows:

```json
{
  "status": "error",
  "data": {
    "message": "Oh no! An error has occured."
  }
}
```
