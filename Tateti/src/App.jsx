import { useState } from 'react'
import './App.css'

function App() {  
  const [belongs, setBelongs] = useState([null,null,null,null,null,null,null,null,null])
  const [Jugador, setJugador] = useState(true)

  const Cuadricula = (n) => {
    //Jugador 1  y 2
    const newBelongs = [...belongs]; 

    if (newBelongs[n] == null) {
      if (Jugador) {
        newBelongs[n] = "x"
        setJugador(false)
      } else {
        newBelongs[n] = "o"
        setJugador(true)
      }
    }
    setBelongs(newBelongs);

    //Verificacion de X y O

      if ((newBelongs[0] == "x" && newBelongs[1] == "x" && newBelongs[2] == "x") ||
          (newBelongs[3] == "x" && newBelongs[4] == "x" && newBelongs[5] == "x") ||
          (newBelongs[6] == "x" && newBelongs[7] == "x" && newBelongs[8] == "x") ||
          (newBelongs[0] == "x" && newBelongs[3] == "x" && newBelongs[6] == "x") ||
          (newBelongs[1] == "x" && newBelongs[4] == "x" && newBelongs[7] == "x") ||
          (newBelongs[2] == "x" && newBelongs[5] == "x" && newBelongs[8] == "x") ||
          (newBelongs[0] == "x" && newBelongs[4] == "x" && newBelongs[8] == "x") ||
          (newBelongs[2] == "x" && newBelongs[4] == "x" && newBelongs[8] == "x") 
        ) {
          alert("GANO X")
      }

      if ((newBelongs[0] == "o" && newBelongs[1] == "o" && newBelongs[2] == "o") ||
          (newBelongs[3] == "o" && newBelongs[4] == "o" && newBelongs[5] == "o") ||
          (newBelongs[6] == "o" && newBelongs[7] == "o" && newBelongs[8] == "o") ||
          (newBelongs[0] == "o" && newBelongs[3] == "o" && newBelongs[6] == "o") ||
          (newBelongs[1] == "o" && newBelongs[4] == "o" && newBelongs[7] == "o") ||
          (newBelongs[2] == "o" && newBelongs[5] == "o" && newBelongs[8] == "o") ||
          (newBelongs[0] == "o" && newBelongs[1] == "o" && newBelongs[2] == "o") ||
          (newBelongs[2] == "o" && newBelongs[4] == "o" && newBelongs[8] == "o")
        ) {
        alert("GANO O")
      }



  }



  return (
    <>
    <div>
      <header className='Titulo'>Juego Ta-Te-Ti</header>
    </div>
    <br></br>
    <div className='container'>
      <div className='item' onClick={() => Cuadricula(0)}>{belongs[0]}</div>
      <div className='item' onClick={() => Cuadricula(1)}>{belongs[1]}</div>
      <div className='item' onClick={() => Cuadricula(2)}>{belongs[2]}</div>
      <div className='item' onClick={() => Cuadricula(3)}>{belongs[3]}</div>
      <div className='item' onClick={() => Cuadricula(4)}>{belongs[4]}</div>
      <div className='item' onClick={() => Cuadricula(5)}>{belongs[5]}</div>
      <div className='item' onClick={() => Cuadricula(6)}>{belongs[6]}</div>
      <div className='item' onClick={() => Cuadricula(7)}>{belongs[7]}</div>
      <div className='item' onClick={() => Cuadricula(8)}>{belongs[8]}</div>
    </div>
    </>
  )
}

export default App
