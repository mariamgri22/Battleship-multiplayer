import React from 'react'
import { useGameContext } from '../../Context'
import PlayerBoard from '../Board/Board'
import { ACTION_TYPE } from '../../state/state';
import OpponentBoard from '../Board/OpponentBoard'

export default function Player({playerId}) {
  const { state:{turn,[playerId]:{ships,isReady},gameStart},dispatch}=useGameContext();

  const opponentId=playerId==='player1' ? 'player2':'player1';

 
  const setShipsMode=()=>{
    dispatch({type:ACTION_TYPE.SET_SHIPS_MODE,playerId})
  }
  const startGame=()=>{
    dispatch({type:ACTION_TYPE.SET_IS_READY,playerId})
  }
  
  return (
    <div>
        <PlayerBoard   playerId={playerId}/>
        { !isReady && <button  onClick={setShipsMode}>Set ships</button>}
        <button onClick={startGame} disabled={!(ships.size===20)}>Start Game</button>
        <OpponentBoard opponentId={opponentId}  playerId={playerId}/>
    </div>
  )
}
