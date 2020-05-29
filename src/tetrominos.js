export const TETROMINOS = {
    //clear tetrominos when we are not showing anything
    0: { shape: [[0]], color: '0, 0, 0' },
    //the 4 tetrominos
    I: {
        shape: [
                    [0, 'I', 0, 0],
                    [0, 'I', 0, 0],
                    [0, 'I', 0, 0],
                    [0, 'I', 0, 0]

                ],
        color: '80, 227, 230',
    },
    // the shape of tetrominos you can notice by the letters
    J: {
        shape: [
                    [0, 'J', 0 ],
                    [0, 'J', 0 ],
                    ['J', 'J', 0 ]
                ],
        color: '36, 95, 223',
    },
    L: {
        shape: [
                    [0, 'L', 0, ],
                    [0, 'L', 0, ],
                    [0, 'L', 'L'],
                ],
        color: '223, 173, 36',
    },
    O: {
        shape: [
                    [ 'O', 'O' ],
                    [ 'O', 'O' ],
                ],
        color: '223, 217, 36',
    },
    S: {
        shape: [
                    [0, 'S', 'S' ],
                    ['S', 'S', 0 ],
                    [0, 0, 0]
                ],
        color: '48, 211, 56',
    },
    T: {
        shape: [
                    [0, 0, 0 ],
                    ['T', 'T', 'T' ],
                    [0, 'T', 0]
                ],
        color: '132, 61, 19',
    },
    Z: {
        shape: [
                    ['Z', 'Z', 0],
                    [0, 'Z', 'Z' ],
                    [0, 0, 0]
                ],
        color: '227, 78, 78',
    },

}
//this function will return us a random sape from the object above
export const randomTetromino = () => {
    const tetrominos = 'IJLOSTZ';
    const randTetromino = 
        tetrominos[Math.floor(Math.random() * tetrominos.length)];
    return TETROMINOS[randTetromino];
}