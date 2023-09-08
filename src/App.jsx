

import './App.css'
import Board from './components/Board/Board'
import Header from './components/Header/Header'
import Player from './components/Player/Player'
import Square from './components/Square/Square'

function App() {

  return (
    <>
    <div className='main'>
        
        <Header/>
        <Player whichplayer='X'/>
        <Player whichplayer='O'/>
        <Board/>
        <Square/>
    </div>

    </>
  )
}

export default App
