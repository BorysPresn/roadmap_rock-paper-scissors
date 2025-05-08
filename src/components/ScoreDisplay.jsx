import React from 'react';

const ScoreDisplay = ({playerScore, computerScore, onReset}) => {
    return (
        <div className="game-screen__score uppercase">
            <div className="reset-score w-[100%]" onClick={onReset}>
                reset the score
            </div>
            <div className="player-score">Player score: {playerScore}</div>
            <div className="computer-score">Computer score: {computerScore}</div>
        </div>
    );
}

export default ScoreDisplay;
