//As a cruise ship captain,
//So I can get passengers aboard a ship,
//I want a ship to have a starting port.

//port = class
//ship = object ()
//passengers(properties)
//use get method for passengers to aboard the ship.
const { Ship, Port, Itinenary } = require('./cruise-ships.js')

describe('constructor', () => {
    it('returns an object', () => {
        const port = new Port('Larnaca')
        const itinenary = new Itinenary([port])
        const ship = new Ship(itinenary, 'Titanic', 100)
        expect(ship).toBeInstanceOf(Object)
    });
    it('has a starting port', () => {
        const port = new Port('Limasol')
        const itinenary = new Itinenary([port])
        const ship = new Ship(itinenary, 'Titanic', 100)
        expect(ship.currentport).toBe(port)
    });
    it('has passengers', () => {
        const port = new Port('Dallas')
        const itinenary = new Itinenary([port])
        const ship = new Ship(itinenary, 'Titanic', 100)
        expect(ship.passengers).toBe(100)
    });
    it('it can sail', () => {
        const Limasol = new Port('Limasol')
        const Larnaca = new Port('Larnaca')
        const itinenary = new Itinenary([Limasol, Larnaca])
        const ship = new Ship(itinenary, 'Titanic', 100)
        ship.setsail()
        expect(ship.currentport).not.toBe(true)
        expect(ship.previousport).toEqual(Limasol)
        expect(Larnaca.ships).not.toContain(ship);
    });
    it('can/t sail further than its itinerary', () => {
        const Larnaca = new Port('Larnaca')
        const Limasol = new Port('Limasol')
        const itinenary = new Itinenary([Larnaca, Limasol])
        const ship = new Ship(itinenary, 'Titanic', 100)
        ship.setsail();
        ship.dock();
        expect(() => ship.setsail()).toThrowError('End of itinenary reached')
    });
});
describe('constructor2', () => {
    it('returns a Port object', () => {
        const Limasol = new Port('Limasol')
        expect(Limasol).toBeInstanceOf(Object)
    });
    it('has a name', () => {
        const Limasol = new Port('Limasol');
        expect(Limasol.portname).toBe('Limasol')
    });
    it('can add a ship', () => {
        const Larnaca = new Port('Larnaca');
        const itinenary = new Itinenary([Larnaca]);
        const ship = new Ship(itinenary, 'Titanic', 100);
        Larnaca.addship(ship);
        expect(Larnaca.ships).toContain(ship)
    });
    it('gets added to port on instantiation', () => {
        const Larnaca = new Port('Larnaca');
        const itinenary = new Itinenary([Larnaca]);
        const ship = new Ship(itinenary, 'Titanic', 100);
        expect(Larnaca.ships).toContain(ship);
    });
});
describe('constructor2', () => {
    it('can remove a ship', () => {
        let Baf = new Port('Baf');
        let itinenary = new Itinenary([Baf]);
        let Mary = new Ship(itinenary, 'Mary', 100);
        let gurrada = new Ship(itinenary, 'gurrada', 100);
        //Larnaca.addship(Titanic)
        //Larnaca.addship(Mary)
        console.log(Baf)
        Baf.removeship(Mary);
        console.log(Baf)
        expect(Baf.ships).toEqual([gurrada]);
    });
});
describe('constructor 3', () => {
    it('returns an Itinerary object', () => {
        const port = new Port('Girne')
        const itinenary = new Itinenary([port])
        expect(itinenary).toBeInstanceOf(Object)
    });
    it('can dock at a different port', () => {
        const Limasol = new Port('Limasol')
        const Larnaca = new Port('Larnaca')
        const itinenary = new Itinenary([Limasol, Larnaca])
        const Titanic = new Ship(itinenary, 'Titanic', 100)
        Titanic.setsail()
        Titanic.dock()
        expect(Titanic.currentport).toEqual(Larnaca)
        expect(Larnaca.ships).toContain(Titanic)
    });
});