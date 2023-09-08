
import { useState } from 'react'
import Square from '../Square/Square'

const Board = (props) => {
    const [values, setValues] = useState([
        "Empty", 
        "Empty3",
        "Empty4",
        "Empty5",
        "Empty6",
        "Empty7",
        "Empty8",
        "Empty9",
        "Empty0"

    ]);

    const [player, setPlayer] = useState("X");

    const uniqueIds = ["id_1", "id_2", "id_3", "id_4", "id_5", "id_6", "id_7", "id_8", "id_9"];
    
    const handelClick = (indexOfClicked)=>{
        console.log("square clicked", indexOfClicked);
        let copyOfState = [...values];
        copyOfState[indexOfClicked] = player;
        setValues(copyOfState);
        let newPlayer = player === "X"? "O": "X";
        setPlayer(newPlayer);
    }

    const squareJsx = values.map((value, idx)=>{
        return <Square value={value} 
        handelClick={handelClick}
        key={uniqueIds}
        idx={idx}/>
    })

    console.log(squareJsx);
    
  return (
    <div className='board'>
        {squareJsx}
    </div>
  )
}

export default Board