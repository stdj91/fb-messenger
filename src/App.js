import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import './App.css';
import Message from './Message';

function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{username:'Stefan', text:'Hello from Bukulja'},
  {username: 'Tatjana', text:'I am teacher'}]);
  const [username, setUsername] = useState('');

  useEffect(() => {
      setUsername(prompt('Please enter your name'))
  },[]);
  

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, {username:username, text:input}])
    setInput('')
  }
  
  return (
    <div className="App">
      <h1>Hi from React</h1>
      <h2>Welcome {username}</h2>
      {/* */}

      <form>
      <FormControl>
            <InputLabel >Enter a message</InputLabel>
            <Input value={input} onChange={event => setInput(event.target.value)}  />
            <Button disabled={!input} variant="contained" color="secondary" type='submit' onClick={sendMessage}>Send a message</Button>
      </FormControl>
      
        
        </form>
  

      {
        messages.map(msg => (
          <Message username={msg.username} text={msg.text}/>
        ))
      }
    </div>
  );
}

export default App;
