import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Menu } from './components/Menu/Menu';
import {
  DriftPage,
  ForzaPage,
  HomePage,
  TimeAttackPage,
} from './components/Menu/Page';

import './styles/app.css';

export const App = () => {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Route path="/" exact component={HomePage} />
          <Route path="/drift" component={DriftPage} />
          <Route path="/timeattack" component={TimeAttackPage} />
          <Route path="/forza" component={ForzaPage} />
        </div>
      </div>
    </Router>
  );
};
