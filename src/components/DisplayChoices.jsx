import ShapeIcon from './ShapeIcon';

const DisplayChoices = ({compChoice, playerChoice, isAnimating}) => {
    return (
        <div className="flex justify-center items-center gap-[58px]">
            <div>
                <ShapeIcon
                    shapeType={playerChoice}
                    isAnimated={isAnimating}
                />
            </div>
            <span className="font-bold text-xl">vs</span>
            <div className="mirrored">
                <ShapeIcon
                    shapeType={compChoice}
                    isAnimated={isAnimating}
                />
            </div>
        </div>
    );
}

export default DisplayChoices;
