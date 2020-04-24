class Structure {
    constructor() {
        this.isStructure = true;
        this.humanMade = true
    }
}
class Building extends Structure{
    constructor(name, stories, address) {
        super();
        this.name = name;
        this.stories = stories;
        this.address = address;
        this.guests = []
    }

    info() {
        console.log(
            'name:',
            this.name,
            '| stories:',
            this.stories,
            '| address:',
            this.address
        )
    }

    get needElevator() {
        return this.stories > 10
    }

    set guest(value) {
        this.guests.push(value)
    }
}

class Restaurant extends Building {
    constructor(name, stories, address, cuisine) {
        super(name, stories, address)

        this.cuisine = cuisine
    }

    info() {
        super.info();
        console.log(`We serve ${this.cuisine} cusine`)
    }
}

const kaiju = new Restaurant(
    'kaiju',
    2,
    'SF, CA',
    'Japanese'
)

console.log('kaiju', kaiju)

kaiju.info()