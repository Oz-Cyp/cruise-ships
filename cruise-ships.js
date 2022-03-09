class Ship {
    constructor(itinenary, name, passengers) {
        this.itinenary = itinenary;
        this.passengers = passengers;
        this.name = name;
        this.currentport = itinenary.ports[0];
        this.previousport = null;
        this.currentport.addship(this);
    }
    setsail() {
        const itinenary = this.itinenary;
        const currentportIndex = itinenary.ports.indexOf(this.currentport);

        if (currentportIndex === (itinenary.ports.length - 1)) {
            throw new Error('End of itinenary reached');
        }
        this.previousport = this.currentport;
        this.currentport = null;
        this.previousport.removeship(this)
    }
    dock() {
        const itinenary = this.itinenary
        const previousportIndex = itinenary.ports.indexOf(this.previousport)
        this.currentport = itinenary.ports[previousportIndex + 1]
        this.currentport.addship(this)
    }
}
class Port {
    constructor(portname) {
        this.portname = portname
        this.ships = []
    };
    addship(shipname) {
        this.ships.push(shipname)
    };
    removeship(shipname) {
        this.ships.indexOf(shipname) !== -1 && this.ships.splice(this.ships.indexOf(shipname), 1)
    };
}

class Itinenary {
    constructor(ports) {
        this.ports = ports
    }
}

module.exports = { Ship, Port, Itinenary };