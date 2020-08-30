import React from 'react';
import Header from '../components/Header'
import Route from './router'
import { BrowserRouter } from 'react-router-dom';
import '../assets/stylesheets/App.css';
import { connect } from 'react-redux';


function App() {
  return (
    <BrowserRouter>
    <div className="contianer">
      <Header></Header>
      <Route/>
    </div>
    </BrowserRouter>
  );
}

export default App;
