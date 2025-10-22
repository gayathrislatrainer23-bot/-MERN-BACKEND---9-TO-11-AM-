
import './App.css';
// import Login from './components/Login';
// import SampleForm from './components/SampleForm';
// import StudentList from './components/StudentList';
// // import Count from './components/Count';
// import Greeting from './components/Greeting';
import Home from './pages/Home';
import Login from './components/Login';
import {BrowserRouter, Link, Route, Routes}  from "react-router-dom"
import About from './pages/About';
import Admin from './pages/Admin';
import ClientHome from './pages/ClientHome';
import LoginForm from './pages/Loginform';
import Counter from './components/Counter';

function App() {
  //  let name1 = "Manu"
  const user = {
    // name: 'Gayathri',
    email : " g@gmal.com",
     password : "123",
      app:{
        a:"apple"
      }
  }
  return (
    <div className="App">
{/* <Greeting  name1 ={name1} /> */}
{/* <Count/> */}
{/* <SampleForm/>
<Login/> */}
{/* <StudentList/> */}
{/* <h1>{user.email}</h1> */}
<BrowserRouter>
<nav>
  <Link  to="/home" >Home</Link>
</nav>
<Routes>
  <Route path='/home'  element ={<Home/>}/>
  {/* <Route path='/'  element ={<LoginForm/>}/> */}
  <Route path='/'  element ={<Counter/>}/>
  <Route path='/about'  element ={<About/>}/>
  <Route path='/Admin'  element ={<Admin/>}/>
  <Route path='/Client'  element ={<ClientHome/>}/>
</Routes>
</BrowserRouter>

    </div>
  
  );
}

export default App;
