import './hello-world';
import './xcounter/xcounter.ts';
import MyCounterComponent from "./my-counter/MyCounterComponent.tsx";
function App() {
  const handleIncrement = (count: number) => {
    console.log('Incremented to:', count);
  };
  
  const handleDecrement = (count: number) => {
    console.log('Decremented to:', count);
  };
  return (
    <div>
      <hello-world></hello-world>
      <x-counter value={10}></x-counter>
      <MyCounterComponent start={10} onIncrement={handleIncrement} onDecrement={handleDecrement}></MyCounterComponent>
    </div>
  )
}

export default App
