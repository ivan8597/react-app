import React, { useState } from "react";
import Costs from "./components/Costs";
import NewCost from "./components/NewCost/NewCost";
const INITIAL_COST = [
  {
    id: "c1",
    date: new Date(2022, 4, 9),
    description: "Холодильник",
    amount: 999.99
  },
  {
    id: "c2",
    date: new Date(2022, 9, 2),
    description: "Mackbook",
    amount: 999.99
  },
  {
    id: "c3",
    date: new Date(2022, 9, 9),
    description: "Телевизор",
    amount: 999.99
  },
];

function App() {


  const [costs, setCosts] = useState(INITIAL_COST)

  const addCostHandler = (cost) => {
    setCosts(prevCosts => {
      return [cost,...prevCosts]
    })
  }


  return (
    <>
       <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
       </div>
    </>
  );
}

export default App;
