import './App.css'
import Carta from './components/Carta'


function App() {
  const mostraCarta = (numero:number , pinta:string) => {
    alert (`Carta de numero: ${numero} y de pinta ${pinta}`)
  };

  return (<div>
    <h1>Mi primer proyectgo en react</h1>
    <p>Hecho por Luisss</p>

    <Carta numero={2} pinta='Trebol ♣' mostraCarta={mostraCarta}/>
     <Carta numero={4} pinta='Diamante ♦' mostraCarta={mostraCarta}/>
       <Carta numero={6} pinta='Picas ♠' mostraCarta={mostraCarta}/> 
           <Carta numero={8} pinta='Corazon ♥' mostraCarta={mostraCarta}/>
           <Carta numero={5} pinta='Rey de corazon 🎁' mostraCarta={mostraCarta}/>
            <Carta numero={7} pinta='Rey de Picas 🎃' mostraCarta={mostraCarta}/>
  </div>
  )

  }
  

export default App
