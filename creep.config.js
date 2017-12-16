//strict mode:
'use strict';


//export configs:

module.exports.omnicreep = {

    level: {
        1: {
            total: 3,
            requiredEnergy: 300,
            body: [WORK,CARRY,MOVE,MOVE,MOVE]
        },
        2: {
            total: 5,
            requiredEnergy: 350,
            body: [WORK,CARRY,CARRY,MOVE,MOVE,MOVE]
        },
        3: {
            total: 5,
            requiredEnergy: 400,
            body: [WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE]
        },
        4: {
            total: 5,
            requiredEnergy: 450,
            body: [WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE]
        },
        5: {
            total: 5,
            requiredEnergy: 500,
            body: [WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE]
        },
        6: {
            total: 5,
            requiredEnergy: 600,
            body: [WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE]
        },
        7: {
            total: 5,
            requiredEnergy: 700,
            body: [WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE]
        },
        8: {
            total: 5,
            requiredEnergy: 800,
            body: [WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE]
        }    
    } //level

}; //omnicreep

module.exports.harvester = {

    level: {
        1: {
            total: 3,
            requiredEnergy: 300,
            body: [WORK,CARRY,MOVE,MOVE,MOVE]
        },
        2: {
            total: 3,
            requiredEnergy: 350,
            body: [WORK,CARRY,CARRY,MOVE,MOVE,MOVE]
        },
        3: {
            total: 5,
            requiredEnergy: 400,
            body: [WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE]
        },
        4: {
            total: 5,
            requiredEnergy: 450,
            body: [WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE]
        },
        5: {
            total: 5,
            requiredEnergy: 500,
            body: [WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE]
        },
        6: {
            total: 3,
            requiredEnergy: 600,
            body: [WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE]
        },
        7: {
            total: 3,
            requiredEnergy: 700,
            body: [WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE]
        },
        8: {
            total: 3,
            requiredEnergy: 800,
            body: [WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE]
        }

    } //level

}; //harvester

module.exports.upgrader = {

    level: {
        1: {
            total: 3,
            requiredEnergy: 300,
            body: [WORK,CARRY,MOVE,MOVE,MOVE]
        },
        2: {
            total: 3,
            requiredEnergy: 350,
            body: [WORK,CARRY,CARRY,MOVE,MOVE,MOVE]
        },
        3: {
            total: 3,
            requiredEnergy: 400,
            body: [WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE]
        },
        4: {
            total: 3,
            requiredEnergy: 450,
            body: [WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE]
        },
        5: {
            total: 3,
            requiredEnergy: 500,
            body: [WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE]
        },
        6: {
            total: 3,
            requiredEnergy: 600,
            body: [WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE]
        },
        7: {
            total: 3,
            requiredEnergy: 700,
            body: [WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE]
        },
        8: {
            total: 3,
            requiredEnergy: 800,
            body: [WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE]
        }      
    } //level
    
}; //upgrader

module.exports.builder = {

    level: {
        1: {
            total: 3,
            requiredEnergy: 300,
            body: [WORK,CARRY,MOVE,MOVE,MOVE]
        },
        2: {
            total: 3,
            requiredEnergy: 350,
            body: [WORK,CARRY,CARRY,MOVE,MOVE,MOVE]
        },
        3: {
            total: 3,
            requiredEnergy: 400,
            body: [WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE]
        },
        4: {
            total: 3,
            requiredEnergy: 450,
            body: [WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE]
        },
        5: {
            total: 3,
            requiredEnergy: 500,
            body: [WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE]
        },
        6: {
            total: 3,
            requiredEnergy: 600,
            body: [WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE]
        },
        7: {
            total: 3,
            requiredEnergy: 700,
            body: [WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE]
        },
        8: {
            total: 3,
            requiredEnergy: 800,
            body: [WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE]
        }

    } //level   

}; //builder

module.exports.extractor = {

    level: {
        1: {
            total: 2,
            requiredEnergy: 250,
            body: [WORK,WORK,WORK,WORK,WORK,MOVE]
        }
             
    } //level    

}; //extractor

module.exports.mechanic = {
    
    level: {
        1: {
            total: 2,
            requiredEnergy: 300,
            body: [WORK,CARRY,MOVE,MOVE,MOVE]
        },
        2: {
            total: 2,
            requiredEnergy: 350,
            body: [WORK,CARRY,CARRY,MOVE,MOVE,MOVE]
        },
        3: {
            total: 2,
            requiredEnergy: 400,
            body: [WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE]
        },
        4: {
            total: 2,
            requiredEnergy: 450,
            body: [WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE]
        },
        5: {
            total: 2,
            requiredEnergy: 500,
            body: [WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE]
        },
        6: {
            total: 2,
            requiredEnergy: 600,
            body: [WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE]
        },
        7: {
            total: 2,
            requiredEnergy: 700,
            body: [WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE]
        },
        8: {
            total: 2,
            requiredEnergy: 800,
            body: [WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE]
        }

    } //level
    
}; //mechanic

module.exports.infantry = {

    //they're too slow.
    //need to figure out a better division of energy.

    level: {
        1: {
            total: 3,
            requiredEnergy: 200,
            body: [TOUGH,TOUGH,MOVE,MOVE,ATTACK]
        },
        2: {
            total: 3,
            requiredEnergy: 300,
            body: [TOUGH,TOUGH,TOUGH,TOUGH,MOVE,MOVE,ATTACK,ATTACK]
        },
        3: {
            total: 3,
            requiredEnergy: 400,
            body: [TOUGH,TOUGH,TOUGH,TOUGH,MOVE,MOVE,MOVE,MOVE,ATTACK,ATTACK]
        },
        4: {
            total: 3,
            requiredEnergy: 500,
            body: [TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,MOVE,MOVE,MOVE,MOVE,ATTACK,ATTACK,ATTACK]
        }

    } //level

}; //infantry

module.exports.medic = {

    level: {
        1: {
            total: 3,
            requiredEnergy: 300,
            body: [WORK,CARRY,MOVE,MOVE,MOVE]
        },
        2: {
            total: 3,
            requiredEnergy: 350,
            body: [WORK,CARRY,CARRY,MOVE,MOVE,MOVE]
        },
        3: {
            total: 3,
            requiredEnergy: 400,
            body: [WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE]
        },
        4: {
            total: 3,
            requiredEnergy: 450,
            body: [WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE]
        },
        5: {
            total: 3,
            requiredEnergy: 500,
            body: [WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE]
        }       
    } //level    

}; //medic

module.exports.artillery = {

    level: {
        1: {
            total: 3,
            requiredEnergy: 300,
            body: [WORK,CARRY,MOVE,MOVE,MOVE]
        },
        2: {
            total: 3,
            requiredEnergy: 350,
            body: [WORK,CARRY,CARRY,MOVE,MOVE,MOVE]
        },
        3: {
            total: 3,
            requiredEnergy: 400,
            body: [WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE]
        },
        4: {
            total: 3,
            requiredEnergy: 450,
            body: [WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE]
        },
        5: {
            total: 3,
            requiredEnergy: 500,
            body: [WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE]
        }       
    } //level    

}; //artillery