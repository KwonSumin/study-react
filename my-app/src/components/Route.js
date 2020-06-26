// Components/Routes.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import List from "./basic/list";
import Sample from "./basic/sample";
import Memo from "./apps/memo/App"
export default () => (
  <Router>
    <switch>
      <Route path="/list" component={List} />
      <Route path="/sample" component={Sample} />
      <Route path="/memo" component={Memo} />
    </switch>
  </Router>
)