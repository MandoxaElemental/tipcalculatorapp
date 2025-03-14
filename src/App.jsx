import { useState } from 'react'
import './App.css'
import { Calculator } from './components/Calculator'

function App() {

  return (
    <> 
    <div className='flex justify-center items-center m-14'>
      <img className='' src="/public/assets/logo.svg" alt="logo" />
    </div>
    <Calculator/>
    </>
  )
}

export default App
