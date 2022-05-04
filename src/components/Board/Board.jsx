import React from 'react'
import { useGameContext } from '../../Context'
import groupArr from '../../helpers/groupArr'
import setClass, { setPlayerClass } from '../../helpers/setClass'
import { ACTION_TYPE } from '../../state/state'

export default function PlayerBoard({playerId}) {

  const { state:{[playerId]:{isSetShipsMode}},state,dispatch}=useGameContext();

    
  const setShips=(id)=>{
    if(isSetShipsMode){
      dispatch({type:ACTION_TYPE.SET_SHIPS,square:id,playerId})
    }
  }

  
      return (

    <div className={setClass(isSetShipsMode,'set-ships-mode')}>
    <h1> playerId {playerId}</h1>
    {groupArr().map(row=><div className='row'>
      {row.map(square=><div onClick={()=>setShips(square)} className="square">
        <div className={setPlayerClass(state[playerId],square)}></div>
      </div>)}
    </div>)}
    </div>
  )
}
