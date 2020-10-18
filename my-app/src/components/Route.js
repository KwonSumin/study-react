// Components/Routes.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import List from "./basic/list";
import Sample from "./basic/sample";
import Memo from "./apps/memo/App"
import Board from "./apps/board/Board"
import Test from "./test/App"
export default () => (
  <Router>
      <Route path="/list" component={List} />
      <Route path="/sample" component={Sample} />
      <Route path="/memo" component={Memo} />
      <Route path="/board" component={Board} />
      <Route path="/test" component={Test} />
  </Router>
)