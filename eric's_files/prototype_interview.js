function Artist(name, talent) {
    this.name = name;
    this.talent = talent
    // this.info = function () {
    //     console.log('this', this)
    // }
}

class Musician extends Artist {
    constructor(name, talent, instrument) {
        super(name, talent);
        this.instrument = instrument
    }
}
const monet = new Musician(
    'monet',
    'painter',
    'piano'
)

console.log(monet)

Object.prototype.info = function() {
    console.log('this', this)
};


monet.info()