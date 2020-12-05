import React, {Component} from 'react';
import NavBar from './Components/Header/Navbar';
import Body from './Components/Body/Body';
import ContactContainer from './Components/ContactContainer/ContactContainer';
import Footer from './Components/Footer';
import './App.css';
class App extends Component{
  render(){
    return(
      <div>
        <NavBar />
        <Body/>
        <ContactContainer />
        <Footer />
      </div>
    )
  }
}

export default App;
