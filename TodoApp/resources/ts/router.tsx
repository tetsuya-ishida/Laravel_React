import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TaskPage from './pages/tasks'
import HelpPage from './pages/help'
import LoginPage from './pages/login'

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">ホーム</Link>
            </li>
            <li>
              <Link to="/help">ヘルプ</Link>
            </li>
            <li>
              <Link to="/login">ログイン</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/help">
            <HelpPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/">
            <TaskPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Router
