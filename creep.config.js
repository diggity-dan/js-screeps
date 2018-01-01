//strict mode:
'use strict';


//export configs:

module.exports.omnicreep = {

    level: {
        1: {
            total: 3,
            requiredEnergy: 250,
            roomCapacity: 400,
            body: [WORK,CARRY,MOVE,MOVE]
        },
        2: {
            total: 3,
            requiredEnergy: 400,
            roomCapacity: 500,
            body: [WORK,WORK,CARRY,MOVE,MOVE,MOVE]
        },
        3: {
            total: 3,
            requiredEnergy: 500,
            roomCapacity: 600,
            body: [WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE]
        },
        4: {
            total: 3,
            requiredEnergy: 600,
            roomCapacity: 100000000,
            body: [WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE]
        }

    } //level

}; //omnicreep

module.exports.harvester = {

    level: {
        1: {
            total: 3,
            requiredEnergy: 250,
            roomCapacity: 400,
            body: [WORK,CARRY,MOVE,MOVE]
        },
        2: {
            total: 3,
            requiredEnergy: 400,
            roomCapacity: 500,
            body: [WORK,WORK,CARRY,MOVE,MOVE,MOVE]
        },
        3: {
            total: 3,
            requiredEnergy: 500,
            roomCapacity: 600,
            body: [WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE]
        },
        4: {
            total: 3,
            requiredEnergy: 600,
            roomCapacity: 100000000,
            body: [WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE]
        }

    } //level

}; //harvester

module.exports.upgrader = {

    level: {
        1: {
            total: 3,
            requiredEnergy: 250,
            roomCapacity: 400,
            body: [WORK,CARRY,MOVE,MOVE]
        },
        2: {
            total: 3,
            requiredEnergy: 400,
            roomCapacity: 500,
            body: [WORK,WORK,CARRY,MOVE,MOVE,MOVE]
        },
        3: {
            total: 3,
            requiredEnergy: 500,
            roomCapacity: 600,
            body: [WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE]
        },
        4: {
            total: 3,
            requiredEnergy: 600,
            roomCapacity: 100000000,
            body: [WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE]
        }

    } //level
    
}; //upgrader

module.exports.builder = {

    level: {
        1: {
            total: 3,
            requiredEnergy: 250,
            roomCapacity: 400,
            body: [WORK,CARRY,MOVE,MOVE]
        },
        2: {
            total: 3,
            requiredEnergy: 400,
            roomCapacity: 500,
            body: [WORK,WORK,CARRY,MOVE,MOVE,MOVE]
        },
        3: {
            total: 3,
            requiredEnergy: 500,
            roomCapacity: 600,
            body: [WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE]
        },
        4: {
            total: 3,
            requiredEnergy: 600,
            roomCapacity: 100000000,
            body: [WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE]
        }

    } //level 

}; //builder

module.exports.extractor = {

    level: {
        1: {
            total: 2,
            requiredEnergy: 550,
            roomCapacity: 100000000,
            body: [WORK,WORK,WORK,WORK,WORK,MOVE]
        }
             
    } //level    

}; //extractor

module.exports.mechanic = {
    
    level: {
        1: {
            total: 3,
            requiredEnergy: 250,
            roomCapacity: 400,
            body: [WORK,CARRY,MOVE,MOVE]
        },
        2: {
            total: 3,
            requiredEnergy: 400,
            roomCapacity: 500,
            body: [WORK,WORK,CARRY,MOVE,MOVE,MOVE]
        },
        3: {
            total: 3,
            requiredEnergy: 500,
            roomCapacity: 600,
            body: [WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE]
        },
        4: {
            total: 3,
            requiredEnergy: 600,
            roomCapacity: 100000000,
            body: [WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE]
        }

    } //level
    
}; //mechanic

module.exports.infantry = {

    //they're too slow.
    //need to figure out a better division of energy.

    level: {
        1: {
            total: 1,
            requiredEnergy: 200,
            roomCapacity: 300,
            body: [TOUGH,TOUGH,MOVE,MOVE,ATTACK]
        },
        2: {
            total: 1,
            requiredEnergy: 300,
            roomCapacity: 400,
            body: [TOUGH,TOUGH,TOUGH,TOUGH,MOVE,MOVE,ATTACK,ATTACK]
        },
        3: {
            total: 2,
            requiredEnergy: 400,
            roomCapacity: 500,
            body: [TOUGH,TOUGH,TOUGH,TOUGH,MOVE,MOVE,MOVE,MOVE,ATTACK,ATTACK]
        },
        4: {
            total: 2,
            requiredEnergy: 500,
            roomCapacity: 100000000,
            body: [TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,MOVE,MOVE,MOVE,MOVE,ATTACK,ATTACK,ATTACK]
        }

    } //level

}; //infantry

module.exports.medic = {

    level: {
        1: {
            total: 3,
            requiredEnergy: 250,
            roomCapacity: 400,
            body: [WORK,CARRY,MOVE,MOVE]
        },
        2: {
            total: 3,
            requiredEnergy: 400,
            roomCapacity: 500,
            body: [WORK,WORK,CARRY,MOVE,MOVE,MOVE]
        },
        3: {
            total: 3,
            requiredEnergy: 500,
            roomCapacity: 600,
            body: [WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE]
        },
        4: {
            total: 3,
            requiredEnergy: 600,
            roomCapacity: 100000000,
            body: [WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE]
        }

    } //level  

}; //medic

module.exports.artillery = {

    level: {
        1: {
            total: 1,
            requiredEnergy: 200,
            roomCapacity: 300,
            body: [MOVE,RANGED_ATTACK]
        },
        2: {
            total: 1,
            requiredEnergy: 400,
            roomCapacity: 550,
            body: [MOVE,MOVE,RANGED_ATTACK,RANGED_ATTACK]
        },
        3: {
            total: 3,
            requiredEnergy: 600,
            roomCapacity: 750,
            body: [MOVE,MOVE,MOVE,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK]
        },
        4: {
            total: 3,
            requiredEnergy: 800,
            roomCapacity: 100000000,
            body: [MOVE,MOVE,MOVE,MOVE,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK]
        }

    } //level  

}; //artillery