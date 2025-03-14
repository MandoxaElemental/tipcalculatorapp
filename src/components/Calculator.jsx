import React, { useEffect, useState } from 'react'

export const Calculator = () => {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const [custom, setCustom] = useState("");
  const [currentTip, setTip] = useState("");
  const [error, setError] = useState("");
  const [tipsTotal, setTips] = useState();
  const [total, setTotal] = useState();
  const [active, setActive] = useState();

  const arr = [5, 10, 15, 25, 50]

  useEffect(() => {
    Percentage()
  }, [bill])

  useEffect(() => {
    errorMessage()
    Percentage()
  }, [people])

  useEffect(() => {
    Percentage()
    setTip(custom)
  }, [custom])

  useEffect(() => {
    Percentage()
  }, [currentTip])

  function Percentage(){
    let tips = ((bill / 100) * currentTip).toFixed(2)
    setTips(tips)
    let divisor = (Number(people))
    let dividend = Number((tips * people) + Number(bill)).toFixed(2)
    if(people < 1){
      setTotal("0.00")
    } else {
      setTotal(((dividend / divisor)).toFixed(2))
    }
  }

function handlePercent(n){
  setTip(n)
  Percentage()
}

  function Reset(){
    setError('')
    setTip(100)
    setTips("0.00");
    setTotal("0.00");
    callAndClear()
  }

  function errorMessage(){
    if(people < 1){
      setError("Can't be zero")
    } else {
        setError('')
      }
      return;
  }

  const callAndClear = (e) => {
    setBill('')
    setCustom('')
    setPeople('')
  }

  useEffect(() => {
    setError('')
    setTip(100)
    setTips("0.00");
    setTotal("0.00");
}, [])




  return (
    <>
    <div className='flex justify-center'>
      <div className='rounded-3xl bg-white h-auto w-[65%] p-7 grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div className='grid grid-rows-auto gap-8'>
          <div>
            <p className='text-[#5E7A7D] font-bold pb-3'>Bill</p>
            <div>
              <img className='absolute p-3' src="/public/images/icon-dollar.svg" alt="dollar" />
            <input onChange={ (event) => setBill(event.target.value)} className='w-[100%] border-none rounded-md bg-[#F4FAFA] text-right text-[#00494D] text-xl font-bold' type="number" placeholder='0'/>
            </div>
          </div>
          <div>
            <p className='text-[#5E7A7D] font-bold pb-3'>Select Tip %</p>
            <div className='grid auto-rows-max grid-cols-3 gap-3'>
              {arr.map((perc, i) => {
                return (
                  <button key={i} onClick={() => handlePercent(perc)} className='bg-[#00494D] hover:bg-[#C5E4E7] h-[45px] rounded-md text-[#F4FAFA] text-xl font-bold hover:cursor-pointer'>{perc}%</button>
                )
              })}
                <button className=''><input onChange={ (event) => setCustom(event.target.value)} className='h-[45px] border-none w-[100%] text-center rounded-md bg-[#F4FAFA] text-xl font-bold text-[#00494D]' type="number" placeholder='Custom' /></button>
            </div>
          </div>
          <div>
            <div className='flex justify-between'>
            <p className='text-[#5E7A7D] font-bold pb-3'>Number of People</p>
            <p className='text-orange-400 font-bold pb-3'>{error}</p>
            </div>
          <div>
              <img className='absolute p-3' src="/public/images/icon-person.svg" alt="person" />
            <input value={people} onChange={ (event) => setPeople(event.target.value)} className='w-[100%] border-none rounded-md bg-[#F4FAFA] text-right text-[#00494D] text-xl font-bold' type="number" placeholder='0' />
            </div>
          </div>
        </div>
        <div className='rounded-3xl p-7 h-full w-full bg-[#00494D] grid grid-rows-2'>
          <div className='grid auto-rows-auto pt-7 gap-5'>
            <div className='flex justify-between'>
              <div>
                <p className='text-[#F4FAFA]'>Tip Amount</p>
                <p className='text-[#7F9C9F]'>/ person</p>
              </div>
              <div>
                <p className='text-4xl font-bold text-[#26C0AB]'>${tipsTotal}</p>
              </div>
            </div>
            <div className='flex justify-between'>
              <div>
                <p className='text-[#F4FAFA]'>Total</p>
                <p className='text-[#7F9C9F]'>/ person</p>
              </div>
              <div>
                <p className='text-4xl font-bold text-[#26C0AB]'>${total}</p>
              </div>
            </div>
          </div>
          <div className='flex items-end'>
            <button type="reset" disabled={true} onClick={Reset} className='bg-[#26C0AB] hover:bg-[#C5E4E7] h-[45px] w-[100%] rounded-md font-bold text-[#00494D]'> RESET</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
