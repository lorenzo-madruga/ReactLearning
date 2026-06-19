import './App.css'
import { useState } from 'react'
import { FormularioDeEvento } from './components/FormularioDeEvento'
import { Tema } from './components/Tema'
import { Banner } from './components/Banner'
import { CardEvento } from './components/CardEvento'

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

  const [eventos, setEventos] = useState([])

  function adicionarEvento(evento) {
    setEventos([...eventos, evento])
  }

  return (
    <main>
      <header>
        <img src="/logo.png" alt="Logo" />
      </header>
      <Banner />
      <FormularioDeEvento temas={temas} aoSubmeter={adicionarEvento}/>
      <section className='container'>
        {temas.map(function (item) {

          if (!eventos.some(function (evento) {
            return evento.tema && evento.tema.id === item.id
          })) {
            return null
          }

          return (
            <section key={item.id}>
              <Tema tema={item} />
              <div className="eventos">
                {eventos
                  .filter(function (ev) {
                    return ev.tema && ev.tema.id === item.id
                  })
                  .map(function (ev, index) {
                    return <CardEvento evento={ev} key={index} />
                })}
              </div>
            </section>
          )
        })}
      </section>
    </main>
  )
}

export default App
