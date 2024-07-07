import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import Home from './components/home';
import Menu from './components/menu';
import Book from './components/book';
import About from './components/about';
import Services from './components/services';
import Contact from './components/contact';
import Doclog from './components/doclog';

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      <Menu/>
        <Routes>
     
          <Route path = '/' element = {<Home/>}/>
          <Route path = '/login' element = {<Login/>}/>
          <Route path = '/register' element = {<Register/>}/>
          <Route path = '/book' element = {<Book/>}/>
          <Route path = '/about' element = {<About/>}/>
          <Route path = '/services' element = {<Services/>}/>
          <Route path = '/contact' element = {<Contact/>}/>
          <Route path = '/doclog' element = {<Doclog/>}/>
        </Routes>
      </BrowserRouter>
        
      
    </div>
  );
}

export default App;