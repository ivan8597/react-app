import "./CostForm.css"
import React, { useState } from "react"
const CostForm = (props) => {

  const [inputName, setInputName] = useState('');
  const [inputNumb, setInputNumb] = useState('');
  const [inputDate, setInputDate] = useState('');

  // const[userInput,setUserInput]=useState({
  //   name:"",
  //   numb:"",
  //   date:""
  // })
  const nameChange = (e) => {
    setInputName(e.target.value)
    // setUserInput({
    //   ...userInput,
    //   name:e.target.value
    // })

  };
  const numbChange = (e) => {
    setInputNumb(e.target.value)
    // setUserInput({
    //   ...userInput,
    //   numb:e.target.value
    // })
  };

  const dataChange = (e) => {
    setInputDate(e.target.value)
    // setUserInput({
    //   ...userInput,
    //   date:e.target.value
    // })

  }


    const handlerSubmit = (e) => {
      e.preventDefault();

      const cosData={
        description:inputName,
        numb:inputNumb,
        date: new Date(inputDate)
      };
      

      props.onSaveData(cosData)
      setInputName("");
      setInputNumb("");
      setInputDate("");
    };

  
  return (
    <>
      <form onSubmit={handlerSubmit}>
        <div className="new-cost__controls">
          <div className="new-cost__control">
            <label>Название</label>
            <input type='text'value={inputName} onChange={nameChange} />
          </div>
          <div className="new-cost__control">
            <label>Cумма</label>
            <input type='number'
              min="0.01" step="0.01" value={inputNumb} onChange={numbChange} />
          </div>
          <div className="new-cost__control">
            <label>Дата</label>
            <input type='date'
              min="2019-01-01" step="2022-12-31" value={inputDate} onChange={dataChange} />
          </div>
          <div className="new-cost__actions">
            <button type="submit">Добавить Pacход</button>
          </div>
        </div>
      </form>

    </>
  )
}
export default CostForm
