const Pet = require('../src/pet');

describe('constructor', () => {

    it('returns an object', () => {
        const pet = new Pet('Napoleon');

        expect(pet.name).toEqual('Napoleon');
    });
});

describe('constructor', () => {

    it('has a initial age of 0', () => {
        const pet = new Pet('Napoleon');

        expect(pet.age).toEqual(0);
    });
});

describe('growUp', () => {
    it('increments the age by 1', () => {
        const pet = new Pet('Napoleon');

        pet.growUp();

        expect(pet.age).toEqual(1);
        expect(pet.hunger).toEqual(5);
        expect(pet.fitness).toEqual(7);
    });
});

describe('walk', () => {
    it('increases fitness by to a maximum of 10', () => {
        const pet = new Pet('Napoleon');

        pet.fitness = 8;
        pet.walk();

        expect(pet.fitness).toEqual(10);
    });
});

describe('feed', () => {
    it('decrease hunger level by 3', () => {
        const pet = new Pet('Napoleon');

        pet.hunger = 4;
        pet.feed();

        expect(pet.hunger).toEqual(1);
    });
});

describe('Checkup', () => {

    it('fitness is 3 or less', () => {
        const pet = new Pet('Napoleon');

        pet.fitness = 1;
        pet.checkup();

        expect(pet.checkup()).toEqual('I need a walk');
    });

    it('hunger is 5 or more', () => {
        const pet = new Pet('Napoleon');

        pet.hunger = 8;
        pet.checkup();

        expect(pet.checkup()).toEqual('I am hungry');
    });

    it('fitness is 3 or less or hunger is 5 or more', () => {
        const pet = new Pet('Napoleon');

        pet.fitness = 2;
        pet.hunger = 8;
        pet.checkup();

        expect(pet.checkup()).toEqual('I am hungry AND I need a walk');
    });

    it('neither of the above are true', () => {
        const pet = new Pet('Napoleon');

        pet.fitness = 7;
        pet.hunger = 2;
        pet.checkup();

        expect(pet.checkup()).toEqual('I feel great!');
    });
});