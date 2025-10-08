
import './App.css';
import Login from './components/Login';
import SampleForm from './components/SampleForm';
// import Count from './components/Count';
// import Greeting from './components/Greeting';

function App() {
  // let name1 = "Manu
  const user = {
    // name: 'Gayathri',
    email : " g@gmal.com",
     password : "123"
  }
  return (
    <div className="App">
{/* <Greeting  name1 ={name1} /> */}
{/* <Count/> */}
<SampleForm/>
<Login/>
    </div>
  
  );
}

export default App;
