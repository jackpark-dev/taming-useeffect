import { useState, useMemo } from 'react';
import './App.css';
import { useFetch } from './useFetch';

function App() {
  const [url, setUrl] = useState(null);
  const { data } = useFetch({ url, onSuccess: () => console.log('success') });

  console.log('App rendering');

  return (
    <div className="App">
      <div>Hello</div>
      <div>{JSON.stringify(data)}</div>
      <button onClick={() => setUrl('/jack.json')}>jack</button>
      <button onClick={() => setUrl('/sally.json')}>sally</button>
    </div>
  );
}

export default App;
