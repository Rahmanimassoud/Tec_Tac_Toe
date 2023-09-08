
import './Player.css'
const Player = (props) => {
    const {whichplayer} = props
  return (
    <div className='player'>
        <h1 id='player'>Player {whichplayer}</h1>
        <h2 id='player'>Wins: </h2>
    </div>
  )
}

export default Player