//CREATING HELPERS FOR THE GAME, THAT WE'LL NEED TO IMPORT IN OUR COMPONENTS

export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

//creating an array from an array using with width stage and height stage
export const createStage = () => 
 Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, 'clear'])
 )