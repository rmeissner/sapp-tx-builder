
import React from 'react'
import './App.css'
import { useSafe } from './utils/SafeProvider'

const App = () => {
  const safe = useSafe()
  return (<div>{safe.getSafeInfo().safeAddress}</div>)
}

export default App
