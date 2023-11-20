import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
import Progressbutton from './components/Stepper';
import Navigation from './components/Navigation';
// import Location from './components/Location';
import Footer from './components/Footer';
import Service from './components/Service';


function App() {
  return (
    <>
     <Navigation />
     <Progressbutton />
     {/* <Location /> */}
      <Service />
     <Footer />
  
    </>
  
    
  );
}

export default App;
