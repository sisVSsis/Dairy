import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './component/Header';

import Home from './page/Home/home';
import Diary from './page/Diary/diary';
import Lists from './page/List/lists';
import Notes from './page/Note/notes';
import Reminders from './page/Reminder/reminders';
import Others from './page/Other/others';

function App() {
  return (
    <Router>
      <Header />
      <br />
      <br />
      <br />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/diary" component={Diary} />
        <Route exact path="/lists" component={Lists} />
        <Route exact path="/notes" component={Notes} />
        <Route exact path="/reminders" component={Reminders} />
        <Route exact path="/others" component={Others} />
      </Switch>
    </Router>
  );
}

export default App;
