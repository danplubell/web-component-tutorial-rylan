import './hello-world';
import './xcounter/xcounter.ts';
import MyCounterComponent from "./MyCounterComponent.tsx";
function App() {
  
  return (
    <div>
      <hello-world></hello-world>
      <x-counter value={10}></x-counter>
      <MyCounterComponent start={10}></MyCounterComponent>
    </div>
  )
}

export default App
