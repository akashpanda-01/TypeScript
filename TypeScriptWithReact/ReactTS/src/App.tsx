import { ChaiCard } from "./components/ChaiCard";
import { Counter } from "./components/Counter";
import { ChaiList } from "./components/ChaiList";
import type { Chai } from "./types";
import { OrderForm } from "./components/OrderForm";
import { Card } from "./components/Card";


const menu: Chai[] = [
  {id: 1, name: "Masala", price: 10},
  {id: 2, name: "Normal", price: 9},
  {id: 3, name: "Ginger", price: 20},
  {id: 4, name: "Lemon", price: 25}
]

function App() {

  return (
    <>
      <div>
        <h1>React And TypeScript</h1>
        <ChaiCard name={"HeadPhones"} price={5000}/>
        <ChaiCard name={"Mobile"} price={50000}/>
      </div>
      <div>
        <Counter />
      </div>
      <div>
        <ChaiList items={menu}/>
      </div>
      <div>
        <OrderForm onSubmit={(order) => {
          console.log(order.name, order.cups);
        }} />
      </div>
      <div>
        <Card title={"Chai With TypeScript"} footer={<button>Order Now</button>} />
      </div>
    </>
  );
}

export default App;
