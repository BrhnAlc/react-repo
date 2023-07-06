
import Events from './1-events/Events';
import Counter from './2-classComponent/Counter';
import './App.css';
import useStateObject from './3-useState/useStateObject';

function App() {
  return (
    <div className="App">
     <Events/>
     <Counter/>
     <useStateObject/>
    </div>
  );
}

export default App;
