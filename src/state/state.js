// export const ACTION_TYPE={
//     SET_SHIPS:"SET_SHIPS",
//     SET_SHIPS_MODE:"SET_SHIPS_MODE",
//     SET_BEATEN:"SET_BEATEN",
//     SET_PASS:"SET_PASS"
// }
// export const defaultState={
//     player1:{
//         isSetShipsMode:false,
//         ships:new Set(),
//         beaten:new Set(),
//         pass:new Set(),
//     },
//     player2:{},
//     turn:'player1',

// }
// export const reducer = (state,action)=>{
//     switch(action.type){
//         case ACTION_TYPE.SET_SHIPS_MODE:{
//             return{ ...state,player1:{
//                 ...state.player1,
//                 isSetShipsMode:!state.player1.isSetShipsMode,
//             }}
//         }
//         case ACTION_TYPE.SET_SHIPS:{
//            let newShips=new Set([...state.player1.ships]);
//            if(newShips.add(action.square)){
//                newShips.delete(action.square)
//            }
//            else{
//             newShips.add(action.square)
//            }
//            return {...state,player1:{...state.player1,ships:newShips}};
//         }
//         case ACTION_TYPE.SET_BEATEN:{
//             let newBeaten=new Set([...state.player1.beaten]);
//             newBeaten.add(action.square)
//             return {...state,player1:{...state.player1,ships:newBeaten}};
//          }
//          case ACTION_TYPE.SET_PASS:{
//             let newPass=new Set([...state.player1.pass]);
//             newPass.add(action.square)
//             return {...state,player1:{...state.player1,ships:newPass}};
//          }
//     }
// }
export const ACTION_TYPE={
    SET_SHIPS:"SET_SHIPS",
    SET_SHIPS_MODE:"SET_SHIPS_MODE",
    SET_BEATEN:"SET_BEATEN",
    SET_PASS:"SET_PASS",
    START_GAME:"START_GAME",
    SET_IS_READY:"SET_IS_READY"
}

export const defaultState={
    player1:{
        isSetShipsMode:false,
        ships:new Set(),
        beaten:new Set(),
        pass:new Set(),
        isReady:false,
    },
    player2:{
      isSetShipsMode:false,
        ships:new Set(),
        beaten:new Set(),
        pass:new Set(),
        isReady:false,
    },
    gameStart:false,
    turn:'player1'
}

export const reducer=(state,action)=>{
    switch(action.type){
       case ACTION_TYPE.SET_SHIPS_MODE:{
           return {...state, [action.playerId]:{
               ...state[action.playerId], isSetShipsMode:!state[action.playerId].isSetShipsMode}}
       }
       case ACTION_TYPE.SET_SHIPS:{
         let newShips=new Set([...state[action.playerId].ships])
         if(newShips.has(action.square)){
             newShips.delete(action.square)
         }
         else{
            newShips.add(action.square);
         }
         return {...state,[action.playerId]:{...state[action.playerId],ships:newShips}};
       }
       case ACTION_TYPE.SET_BEATEN:{
        let newBeaten=new Set([...state[action.opponentId].beaten])
        
        newBeaten.add(action.id);
        return {...state,[action.opponentId]:{...state[action.opponentId],beaten:newBeaten}};
      }
      case ACTION_TYPE.SET_PASS:{
        let newPass=new Set([...state[action.opponentId].pass])
        newPass.add(action.id);
        return {...state,[action.opponentId]:{...state[action.opponentId],pass:newPass}};
      }
      case ACTION_TYPE.START_GAME:{
        return{
          ...state,
          gameStart:true,
        }
      }
      case ACTION_TYPE.SET_IS_READY:{
         return{
           ...state,
           [action.playerId]:{...state[action.playerId],isReady:true}
         }
      }
       
    }
}