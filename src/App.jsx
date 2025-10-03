import { useState } from 'react';
// import './App.css';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello World</h1>
      
      <p>Count: {count}</p>
      <button>dec</button>
    </>
  );
}

export default App;

