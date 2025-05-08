import React from 'react';
import ShapeIcon from './ShapeIcon';

const DisplayChoices = ({compChoice, playerChoice, isAnimating}) => {
    return (
        <div className="game-screen__choices">
            <div className="player-choice">
                <ShapeIcon
                    shapeType={playerChoice}
                    isAnimated={isAnimating}
                />
            </div>
            <span className="font-bold text-xl">vs</span>
            <div className="computer-choice">
                <ShapeIcon
                    shapeType={compChoice}
                    isAnimated={isAnimating}
                />
            </div>
        </div>
    );
}

export default DisplayChoices;
