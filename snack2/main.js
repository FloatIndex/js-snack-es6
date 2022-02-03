const teams = [
    {
        name: 'Inter',
        points: 0,
        fouls: 0
    },
    {
        name: 'Milan',
        points: 0,
        fouls: 0
    },
    {
        name: 'Juventus',
        points: 0,
        fouls: 0
    },
    {
        name: 'Roma',
        points: 0,
        fouls: 0
    },
    {
        name: 'Napoli',
        points: 0,
        fouls: 0
    },
];

const maxPoints = 100;
const maxFouls = 500;

for (let i = 0; i < teams.length; i++) {
    teams[i].points = randomFromMinToMax(0, maxPoints);
    teams[i].fouls = randomFromMinToMax(0, maxFouls);
}

printArray(createNewArray(teams));





function randomFromMinToMax (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function createNewArray(startingArray) {

    const newArray = [];

    for(let i = 0; i < startingArray.length; i++) {
        const {name, fouls} = startingArray[i];
        newArray[i] = {name, fouls};
    }

    return newArray;
}


function printArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`Squadra: ${array[i].name}, falli subiti: ${array[i].fouls}`);
    }
}