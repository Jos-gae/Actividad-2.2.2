import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import LoginForm from './components/LoginForm';
import ValidatedForm from './components/ValidatedForm';
import HookForm from './components/HookForm';

function App() {
  return (
    <div className="App">
      <h2 style= {{fontWeight: 'bold'}}>Ingreso de sesión</h2>
      <br></br>
      <LoginForm />

      <br></br>
      <ValidatedForm />
    </div>
  );
}

export default App;
