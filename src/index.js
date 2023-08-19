import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from './comonents/Navbar';
import Footer from './comonents/Footer';
import Modal from './comonents/Modal';
import Centertext from './comonents/Centertext';
import Card from './comonents/Card';
import Msgsec from './comonents/Msgsec';
import Review from './comonents/Review';
import Projectsec from './comonents/Projectsec';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <Navbar/>
    <Modal/>
    <Centertext/>
    <Card/>
    <Projectsec /> 
    <Review/>
    <Msgsec/>
    <Footer/>
  
    
   
  </React.StrictMode>
);

