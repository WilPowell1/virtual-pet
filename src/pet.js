const INITIAL_HUNGER = 0;
const MAXIMUM_FITNESS = 10;
const UNFIT = 3;
const HUNGRY = 5;


function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = INITIAL_HUNGER;
    this.fitness = MAXIMUM_FITNESS;
    this.children = [];
};

Pet.prototype = {
    get isAlive() {
        return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    }
};

Pet.prototype.growUp = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    }
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
};

Pet.prototype.walk = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    } else if ((this.fitness + 4) <= MAXIMUM_FITNESS) {
        this.fitness += 4;
    } else {
        this.fitness = MAXIMUM_FITNESS;
    }
};

Pet.prototype.feed = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    } else if ((this.hunger - 3) <= INITIAL_HUNGER) {
        this.hunger += INITIAL_HUNGER;
    } else {
        this.hunger -= 3;
    }
};

Pet.prototype.checkup = function() {
    if (this.fitness <= UNFIT && this.hunger >= HUNGRY) {
        return 'I am hungry AND I need a walk';
    } else if (this.fitness <= UNFIT) {
        return 'I need a walk';
    } else if (this.hunger >= HUNGRY) {
        return 'I am hungry';
    } else {
        return 'I feel great!';
    }
};

Pet.prototype.adoptChild = function() {
    this.children.push(this.child);
};

Pet.prototype.haveBaby = function() {
    const child = new Pet(name);
    this.children.push(this.child);
};


module.exports = Pet;