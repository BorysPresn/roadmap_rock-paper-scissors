import React from 'react';
import ChoiceButton from './ChoiceButton';

const PlayerControls = ({ onPlayerChoice, isAnimating }) => {
    const choicesTitleClasses = `game-screen__choices ${isAnimating ? 'game-screen__choices--hidden' : ''}`;
    const btnWrapperClasses = `btn-wrapper ${isAnimating ? 'btn-wrapper--no-events' : ''}`;

    return (
        <div className="player-choices__container flex flex-col justify-center items-center gap-6">
            <p className={choicesTitleClasses}>Choose your move rock, paper or scissors?</p>
            <div className={btnWrapperClasses}>
                <ChoiceButton onClick={() => onPlayerChoice('rock')}>rock</ChoiceButton>
                <ChoiceButton onClick={() => onPlayerChoice('paper')}>paper</ChoiceButton>
                <ChoiceButton onClick={() => onPlayerChoice('scissors')}>scissors</ChoiceButton>
            </div>
        </div>
    );
};

export default PlayerControls;
