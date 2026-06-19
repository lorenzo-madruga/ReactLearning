import './App.css'
import { useState } from 'react'
import { FormularioDeEvento } from './components/FormularioDeEvento'
import { Tema } from './components/Tema'
import { Banner } from './components/Banner'

function App() {
  const [count, setCount] = useState(0)

  const temas = [
    {
      id: 1,
      nome: 'front-end'
    },
    {
      id: 2,
      nome: 'back-end'
    },
    {
      id: 3,
      nome: 'devops'
    },
    {
      id: 4, 
      nome: 'inteligencia artificial'
    },
    {
      id: 5,
      nome: 'data science'
    },
    {
      id: 6,
      nome: 'cloud'
    }
  ]

  return (
    <main>
      <header>
        <img src="/logo.png" alt="Logo" />
      </header>
      <Banner />
      <FormularioDeEvento />
      {temas.map(tema => <Tema key={tema.id} tema={tema} />)}
    </main>
  )
}

export default App
