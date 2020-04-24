class Building {

    constructor(name, stories, address) {
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

const empireState = new Building(
    'Empire State Building',
    102,
    'NY, NY'
)
console.log(empireState)
empireState.info()

const salesforceTower = new Building(
    'Salesforce Tower',
    61,
    'SF, CA'
)

salesforceTower.info()

console.log(salesforceTower.needElevator)

salesforceTower.guest = 'J. Smith'
salesforceTower.guest = 'A. Seedy'

console.log(salesforceTower.guests)