import 'babel/polyfill';
import koa from 'koa';
import serve from 'koa-static';
import api from './api';
import renderApp from './render-app';

const app = koa();
export default app;


app.use(serve('public'));
// app.use(api());
app.use(renderApp());


app.listen(3000);
console.log('ready');
