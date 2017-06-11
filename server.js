// @flow

const Koa = require('koa')
const app = new Koa()

app.use(ctx => {
  ctx.body = 'Hello World'
})

let server = app.listen(3000, () => {
  console.log(`server listening on :${server.address().port}`)
})
