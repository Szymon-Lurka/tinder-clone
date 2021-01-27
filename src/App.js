import './App.css';
import Header from './components/Header/Header';
import TinderCards from './components/TinderCards/TinderCards';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SwipeButtons from './components/SwipeButtons/SwipeButtons';
import Chats from './components/Chats/Chats';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
          <Route exact path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route exact path="/chat/:person">
            <Header backButton="/chat" />
          </Route>
        </Switch>
        {/* Chats screen */}
        {/* Individual chat screen */}
      </Router>

    </div>
  );
}

export default App;
