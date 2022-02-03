const bikes = [
    {
        name: 'Votec',
        weight: 9
    },
    {
        name: 'Kona',
        weight: 13
    },
    {
        name: 'Wilier',
        weight: 8
    },
    {
        name: 'Marin',
        weight: 11
    },
    {
        name: 'Basso',
        weight: 7
    }
];

const lightBike = findLightestBike(bikes);

alert(`La bici più leggera è la ${lightBike.name}, con un peso di ${lightBike.weight}kg`);


function findLightestBike(bikes) {

    min = bikes[0].weight;
    minIndex = 0;

    for (let i = 0; i < bikes.length; i++) {
        if (bikes[i].weight < min) {
            min = bikes[i].weight;
            minIndex = i;
        }
    }

    return bikes[minIndex];
}