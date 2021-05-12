import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App() {
  const axiosCreate = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/todos/1',
  })
  const test = axiosCreate.get('https://jsonplaceholder.typicode.com/todos/1');
  console.log(test.then(value => console.log(value.config)).catch((error) => console.log(error)));
  return (
    <div className="App">
      <h1>axios</h1>
    </div>
  );
}

export default App;
