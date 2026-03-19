import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './componentes/MenuTopo'
import LivroList from './componentes/LivroList'
import LivroForm from './componentes/LivroForm'



function App() {
  return (
    <BrowserRouter> 
      <Menu />
        <Routes>
          <Route path="/" element={<LivroList />} />
          <Route path="/novo" element={<LivroForm />} />
          <Route path="/editar/:id" element={<LivroForm />} />
        </Routes>
    </BrowserRouter>
      
  )
}

export default App
