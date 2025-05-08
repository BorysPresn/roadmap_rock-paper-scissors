import React from 'react';
import { useNavigate } from 'react-router-dom';

const StartScreen = () => {
    const navigate = useNavigate();
    const handleBtnClick = () => {
        navigate('/game');
    }
    return (
        <div>
            <div className='container'>
                <button onClick={handleBtnClick} className='btn'>play</button>
                <h1 className='header'>rock paper scissors <br />the game</h1>
            </div>
        </div>
    );
}
   

export default StartScreen;