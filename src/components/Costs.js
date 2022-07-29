import CostItem from './CostItem'
import CostFilter from './CostFilter'
import Card from './Card'
import React,{useState} from 'react'



function Costs(props) {
const[selectedYear,setSelectedYear]=useState('2021')

  const yearChangeHandler=(year)=>{
    setSelectedYear(year)
  };

  return (
    <> 
    <div>
      <Card className="costs">
      <CostFilter year={selectedYear}
       onYearChange={yearChangeHandler}/>

       {props.costs.map((item) => (
       <CostItem key={item.id}
          date={item.date}
          description={item.description}
          amount={item.amount} 
          />
          ))}
          
      </Card>

      </div>
    </>
  )
}
export default Costs
