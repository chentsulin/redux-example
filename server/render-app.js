import React from 'react';
import nunjucks from 'nunjucks';
import CounterApp from '../src/containers/CounterApp';
import create from '../src/redux';
import { Provider } from 'redux/react';
import { loadCounter } from '../src/actions/counter';
import * as stores from '../src/stores';


nunjucks.configure('views', { autoescape: true });


export default function renderApp() {
  return function* () {
    const redux = create(stores);
    yield redux.dispatch(loadCounter());
    var state = redux.getState();

    const appString = React.renderToString(
      <Provider redux={redux}>
        {()=><CounterApp {...state} />}
      </Provider>
    );

    this.body = nunjucks.render('index.html', {
      appString,
      initialState: JSON.stringify(state),
      env: process.env
    });
  };
}
