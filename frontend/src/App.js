import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import { Navbar, Footer, Page } from './component';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Page />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
