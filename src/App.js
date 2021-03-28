import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { News } from './components/news/News';
import { NotFound } from './pages/NotFound';
import { NewsList } from './components/news-list/NewsList';
import dotenv from 'dotenv';

const basePath = '/'

export default function App() {
  return (
   

      <Router>
        <Switch>
          <Route exact path={basePath} component={NewsList} />
          <Route exact path="/:type" component={News} />
          <Route component={NotFound} />
        </Switch>
      </Router>

  );
}
