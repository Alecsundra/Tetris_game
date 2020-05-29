import React from 'react';
//components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = () => {

return (
    <div>
        <Stage />
        <aside>
            <div>
                <Display text="Score" />
                <Display text="Raws" />
                <Display text="Level" />
            </div>
        <StartButton />
        </aside>
    </div>
    );
};

export default Tetris;