
import './App.css';
// import Login from './components/Login';
// import SampleForm from './components/SampleForm';
import StudentList from './components/StudentList';
// import Count from './components/Count';
import Greeting from './components/Greeting';

function App() {
   let name1 = "Manu"
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
<Greeting  name1 ={name1} />
{/* <Count/> */}
{/* <SampleForm/>
<Login/> */}
<StudentList/>
<h1>{user.email}</h1>
    </div>
  
  );
}

export default App;
