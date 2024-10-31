import { useState } from 'react'
import Sidebar from './Sidebar'
import SearchBar from './SearchBar'
import './App.css'

function App() {

  return (
    <main>
    <Sidebar />
    <div className='Direita'>
    <SearchBar />
    
    </div>
    </main>
  )
}

export default App
