import { React, useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  // eslint-disable-next-line
  const [title, setTitle] = useState('')
  const handleChange = (e) => {
    console.log(e?.target?.value);
    setTitle(e?.target?.value)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <form>
          <label>Post Title</label>
          <input type='text' onChange={handleChange}/>
          <input type='button' value="submit"/>
        </form>

      </header>
    </div>
  );
}

export default App;
