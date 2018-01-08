import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from 'koa-cors';

import config from 'config';
import errorHandle from 'middleware/errorHandle';
import router from 'routes/index';
// import convert from 'koa-convert';

const serve = require('koa-static');
const convert = require('koa-convert');
const app = new Koa();

app.use(cors())
  .use(serve('.'))
  .use(convert())
  .use(bodyParser())
  .use(errorHandle())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(config.port);
