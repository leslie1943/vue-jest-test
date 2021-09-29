### S3 getObject Body
```ts
async getObjectBody(filename: string){
  const params = {
    Buket: this.buket,
    key: filename
  }
  const data = await this.s3.getObject(params).promise()
  return data.Body
}
```