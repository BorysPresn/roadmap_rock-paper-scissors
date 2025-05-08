import { PLAYER_CHOICE, RESET_SCORE, ROUND_RESULT } from "../actions/actions";

const initialGameState = {
    playerScore: 0,
    computerScore: 0,
    playerChoice: null,
    computerChoice: null,
    roundWinner: null
}

function gameReducer(state = initialGameState, action) {
    switch (action.type) {
        case PLAYER_CHOICE:
            return {
                ...state,
                playerChoice: action.payload.choice,
                roundWinner: null
            }
        case ROUND_RESULT:
            let newPlayerScore = state.playerScore;
            let newComputerScore = state.computerScore;
            if(action.payload.winner === 'player'){
                newPlayerScore += 1; 
            } else if(action.payload.winner === 'computer'){
                newComputerScore += 1;
            }
            return {
                ...state,
                computerScore: newComputerScore,
                playerScore: newPlayerScore,
                computerChoice: action.payload.computerChoice,
                roundWinner: action.payload.winner
            }

        case RESET_SCORE:
            return initialGameState;

        default:
            return state;
    }
}

export default gameReducer;