import './App.css';
import Header from './components/Header/Header';
import TinderCards from './components/TinderCards/TinderCards';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <TinderCards />
          </Route>
          <Route exact path="/chat">
            <h1>Im a chat page</h1>
          </Route>
        </Switch>
        {/* Buttons below tinder cards */}

        {/* Chats screen */}
        {/* Individual chat screen */}
      </Router>

    </div>
  );
}

export default App;
