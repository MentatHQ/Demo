const path = require('path');
const koa = require('koa');
const staticServer = require('koa-static');
const send = require('koa-send');

const app = new koa();
app.use(staticServer(path.join(__dirname, '../static')));
app.use(async (ctx) => {
  if (ctx.status === 404) {
    ctx.body = 'Uh oh'
    await send(ctx, 'index.html', { root: path.join(__dirname, '../static') });
  }
});

app.listen(8090, () => {
  console.log('Server running on 8090...');
});
