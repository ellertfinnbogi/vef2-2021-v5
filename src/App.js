// TODO sækja og setja upp react router

import { Layout } from './components/layout/Layout';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import { Index } from './pages/Index';
import { NewsPage } from './pages/News';
import { NotFound } from './pages/NotFound';
import { NewsList } from './components/news-list/NewsList';

const basePath = '/'

export default function App() {
  return (
   

      <Router>
        <Switch>
          <Route exact path={basePath} component={NewsList} />
          <Route exact path="/:type" component={NewsPage} />
        </Switch>
      </Router>

  );
}
