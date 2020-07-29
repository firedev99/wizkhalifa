import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
//pages
import Home from './pages/Home';
import AlbumPage from './templates/AlbumPage';
import TourPage from './pages/TourPage';
import NoMatch from './pages/NoMatch';

function App() {
  const location = useLocation()
  return (
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Home} />
        <Route exact path="/albums/:albumId" component={AlbumPage} />
        <Route exact path="/tour"  component={TourPage} />
        <Route path="*" component={NoMatch} />
      </Switch>
  );
}

export default App;
