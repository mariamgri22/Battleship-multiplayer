import React from 'react'
import { useGameContext } from '../../Context'
import groupArr from '../../helpers/groupArr'
import setClass, { setOpponentClass, setPlayerClass } from '../../helpers/setClass'
import { ACTION_TYPE } from '../../state/state'

export default function OpponentBoard({playerId,opponentId}) {
  const {state,dispatch}=useGameContext();

  const { [opponentId]:{isSetShipsMode}}=state;
    


  const hitShips =(id)=>{
    if(state[opponentId].ships.has(id)){
      dispatch({type:ACTION_TYPE.SET_BEATEN,id,opponentId})
    }
    else{
      dispatch({type:ACTION_TYPE.SET_PASS,id,opponentId})
    }
  }
  
      return (

    <div className={setClass(isSetShipsMode,'set-ships-mode')}>
    <h1> Player {opponentId}</h1>
    {groupArr().map(row=><div className='row'>
      {row.map(square=><div onClick={()=>hitShips(square)} className="square">
        <div className={setOpponentClass(state[opponentId],square)}></div>
      </div>)}
    </div>)}
    </div>
  )
}