const ScoreDisplay = ({ playerScore, computerScore, onReset }) => {
    return (
        <div className="uppercase flex flex-wrap justify-between gap-4 font-[600] text-[var(--text-secondary-color)]">
            <div className="w-[100%] font-bold text-[20px] cursor-pointer" onClick={onReset}>
                reset the score
            </div>
            <div>Player score: {playerScore}</div>
            <div>Computer score: {computerScore}</div>
        </div>
    );
};

export default ScoreDisplay;
