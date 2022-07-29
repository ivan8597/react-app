import CostForm from "./CostForm"
import  './NewCost.css'
const NewCost=(props)=>{
  const SaveData=(inputCosData)=>{
    const cosData = {
      ...inputCosData,
      id:Math.random().toString()
    };
    console.log(cosData)
  props.onAddCost()
  }
 return(
   <div className="new-cost">
   
   <CostForm onSaveData={SaveData}/>
   </div>
   
 )
}
export default NewCost
