import { useSelector } from 'react-redux';
import './App.css';
import Form from './components/Form';

function App() {
  const name= useSelector(state=>state?.form?.member?.name)
  return (
    <div className="App">
      <h1>FORM</h1>
      <h1>{name}</h1>
      <Form/>
    </div>
  );
}

export default App;
