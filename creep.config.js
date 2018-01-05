//strict mode:
'use strict';



//import stuff:


//notes:

/*
MOVE = 50	
Decreases fatigue by 2 points per tick.

WORK = 100	
Harvests 2 energy units from a source per tick.
Harvests 1 mineral unit from a deposit per tick.
Builds a structure for 5 energy units per tick.
Repairs a structure for 100 hits per tick consuming 1 energy unit per tick.
Dismantles a structure for 50 hits per tick returning 0.25 energy unit per tick.
Upgrades a controller for 1 energy unit per tick.

CARRY = 50
Can contain up to 50 resource units.

ATTACK = 80	
Attacks another creep/structure with 30 hits per tick in a short-ranged attack.

RANGED_ATTACK = 150
Attacks another single creep/structure with 10 hits per tick in a long-range attack up to 3 squares long.
Attacks all hostile creeps/structures within 3 squares range with 1-4-10 hits (depending on the range).

HEAL = 250
Heals self or another creep restoring 12 hits per tick in short range or 4 hits per tick at a distance.

CLAIM = 600	
Claims a neutral room controller.
Reserves a neutral room controller for 1 tick per body part.
Attacks a hostile room controller downgrade or reservation timer with 1 tick per 5 body parts.
A creep with this body part will have a reduced life time of 500 ticks and cannot be renewed.

TOUGH = 10
No effect, just additional hit points to the creep's body. Can be boosted to resist damage.
*/


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
            requiredEnergy: 190,
            roomCapacity: 300,
            body: [TOUGH,MOVE,MOVE,ATTACK]
        },
        2: {
            total: 1,
            requiredEnergy: 380,
            roomCapacity: 400,
            body: [TOUGH,TOUGH,MOVE,MOVE,MOVE,MOVE,ATTACK,ATTACK]
        },
        3: {
            total: 2,
            requiredEnergy: 570,
            roomCapacity: 600,
            body: [TOUGH,TOUGH,TOUGH,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,ATTACK,ATTACK,ATTACK]
        },
        4: {
            total: 2,
            requiredEnergy: 760,
            roomCapacity: 100000000,
            body: [TOUGH,TOUGH,TOUGH,TOUGH,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,ATTACK,ATTACK,ATTACK,ATTACK]
        }

    } //level

}; //infantry

module.exports.medic = {

    level: {
        1: {
            total: 2,
            requiredEnergy: 360,
            roomCapacity: 400,
            body: [TOUGH,MOVE,MOVE,HEAL]
        },
        2: {
            total: 2,
            requiredEnergy: 480,
            roomCapacity: 500,
            body: [TOUGH,TOUGH,TOUGH,MOVE,MOVE,MOVE,MOVE,HEAL]
        },
        3: {
            total: 2,
            requiredEnergy: 780,
            roomCapacity: 800,
            body: [TOUGH,TOUGH,TOUGH,MOVE,MOVE,MOVE,MOVE,MOVE,HEAL,HEAL]
        },
        4: {
            total: 2,
            requiredEnergy: 1140,
            roomCapacity: 100000000,
            body: [TOUGH,TOUGH,TOUGH,TOUGH,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,HEAL,HEAL,HEAL]
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