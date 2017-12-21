// strict mode:
'use strict';

//require stuff:
const creepCommon   = require('creep.common');
const popControl    = require('population.control');

//export stuff:

module.exports.run = function(room, currentPopulation){

    //control the mechanic population:
    popControl(room, 'mechanic', currentPopulation);

    //we have mechanics now, so tell them to do something:
    let mechanics = _.filter(Game.creeps, (creep) => creep.memory.role === 'mechanic' && creep.room.name === room.name);

    for(let index in mechanics){


        //store current creep (for ease):
        let creep = mechanics[index];
        

        //ensure creep has a job property in memory:
        if(!creep.memory.job) {creep.memory.job = 'unemployed';}

        //get energy from containers/storage:
        creepCommon.withdraw(creep, RESOURCE_ENERGY);

        //no containers, so find dropped resources 1st (they decay over time):
        creepCommon.scavenge(creep);

        //nothing to scavenge, so get some energy:
        creepCommon.harvest(creep);

        //transfer energy to tower:
        creepCommon.transferTower(creep);

        //repair stuff:
        creepCommon.repair(creep);

        // nothing else to do, so upgrade controller:
        creepCommon.upgrade(creep);


    } // for(let creep in mechanics)


}; //module.exports.run