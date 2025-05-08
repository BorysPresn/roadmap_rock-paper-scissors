import React, { useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { playerChoice, resetScore, roundResult } from '../actions/actions';
import { getComputerChoice, getWinner } from '../utils/utils';
import ScoreDisplay from './ScoreDisplay';
import DisplayChoices from './DisplayChoices';
import PlayerControls from './PlayerControls';
import { Link } from 'react-router-dom';

const GameScreen = () => {
    const [isAnimating, setIsAnimating] = useState(false);
    const dispatch = useDispatch();

    const gameState = useSelector(
        (state) => ({
            playerScore: state.playerScore,
            computerScore: state.computerScore,
            playerChoice: state.playerChoice,
            computerChoice: state.computerChoice,
            winner: state.roundWinner
        }),
        shallowEqual
    );

    const winnerClasses = `game-screen__winner ${isAnimating || !gameState.winner ? 'game-screen__winner--hidden' : ''}`;

    const handlePlayerChoice = (choice) => {
        dispatch(roundResult(null, null));
        dispatch(playerChoice(null));

        setIsAnimating(true);
        setTimeout(() => {
            dispatch(playerChoice(choice));
            const computerChoice = getComputerChoice();
            const winner = getWinner(choice, computerChoice);
            dispatch(roundResult(winner, computerChoice));
            setIsAnimating(false);
        }, 990);
    };
    const resetGameState = () => {
        dispatch(resetScore());
    };
    return (
        <div className="game-screen">
            <h2 className="game-screen__header capitalize ">Rock Paper Scissors</h2>
            <ScoreDisplay
                playerScore={gameState.playerScore}
                computerScore={gameState.computerScore}
                onReset={resetGameState}
            />
            <h2 className={winnerClasses}>{gameState.winner} WON!🎉</h2>
            <DisplayChoices
                compChoice={gameState.computerChoice}
                playerChoice={gameState.playerChoice}
                isAnimating={isAnimating}
            />
            <PlayerControls onPlayerChoice={handlePlayerChoice} isAnimating={isAnimating} />
            <Link to='/'>Back to Start Screen</Link>
        </div>
    );
};

export default GameScreen;
