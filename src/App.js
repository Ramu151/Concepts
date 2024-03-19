import { React, useState} from 'react'
import axios from "axios";
import logo from './logo.svg';
import './App.css';
import Post from './Post';

const App = () =>  {
  // eslint-disable-next-line
  const [title, setTitle] = useState('')
  const [postData, setPostData] = useState(null)
  const handleChange = (e) => {
    console.log(e?.target?.value);
    setTitle(e?.target?.value)
  }
  const baseURL = 'https://silver-space-capybara-9jr9x4xpprqcv4g-4000.app.github.dev/posts'
  const handleSubmit = async() => {
    event.preventDefault()
    axios.post(baseURL, { title }).then((response) => {
      console.log(response.data)
      setPostData(response.data);
    });
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <form onSubmit={handleSubmit}>
          <label>Post Title</label>
          <input type='text' onChange={handleChange}/>
          <input type="submit" value="Submit"/>
        </form>
      </header>
      <Post postData={postData} />
    </div>
  );
}

export default App;
