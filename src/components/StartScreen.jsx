import { useNavigate } from 'react-router-dom';
import Button from './Button';

const StartScreen = () => {
    const navigate = useNavigate();
    const handleBtnClick = () => {
        navigate('/game');
    };
    return (
        <div>
            <div className="flex justify-start items-center w-screen gap-8 h-screen mx-auto max-w-[578px]">
                <Button onClick={handleBtnClick} size='normal'>
                    play
                </Button>
                <h1 className="capitalize text-4xl text-left font-bold max-w-[378px]">
                    rock paper scissors <br />
                    the game
                </h1>
            </div>
        </div>
    );
};

export default StartScreen;
