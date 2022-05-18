import logo from './logo.svg';
import { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from './firebaseconf';
import { initializeApp } from "firebase/app";
import './App.css';

const firebaseApp = initializeApp(firebaseConfig);

const aut = getAuth(firebaseApp);


function App() {
  const email = "admin@test.com"
  const passd = "test123"

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(aut, email, passd)
      console.log(user);
    } catch (error) {
      console.error(error)
    }
    
  }
  return (
    <div className="App">
      <button  onClick={login}>Log in</button>
    </div>
  );
}

export default App;
