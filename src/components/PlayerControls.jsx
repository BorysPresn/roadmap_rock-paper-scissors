import Button from './Button';

const PlayerControls = ({ onPlayerChoice, isAnimating }) => {
    const choicesTitleClasses = `game-screen__choices ${isAnimating ? 'visualy-hidden' : ''}`;
    const btnWrapperClasses = `flex gap-11 ${isAnimating ? 'btn-wrapper--no-events' : ''}`;
    return (
        <div className="flex flex-col justify-center items-center gap-6">
            <p className={choicesTitleClasses}>Choose your move rock, paper or scissors?</p>
            <div className={btnWrapperClasses}>
                <Button size="small" onClick={() => onPlayerChoice('rock')}>rock</Button>
                <Button size="small" onClick={() => onPlayerChoice('paper')}>paper</Button>
                <Button size="small" onClick={() => onPlayerChoice('scissors')}>scissors</Button>
            </div>
        </div>
    );
};

export default PlayerControls;
