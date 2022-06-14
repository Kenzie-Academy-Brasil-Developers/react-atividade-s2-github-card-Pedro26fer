import './App.css';
import { useState } from 'react'

import SearchBar from './components/SearchBar';
import Card from './components/Card';


function App() {

  const [resultSearch, setResultSearch] = useState([])


  return (
    <div className="App">
      <header className="App-header">
        <SearchBar resultSearch={resultSearch} setResultSearch={setResultSearch}/>
        <Card resultSearch={resultSearch}/>
      </header>
    </div>
  );
}

export default App;
