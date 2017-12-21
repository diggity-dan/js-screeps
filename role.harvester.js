// strict mode:
'use strict';

//require stuff:
const creepCommon   = require('creep.common');
const popControl    = require('population.control');

//export stuff:

module.exports.run = function(room, currentPopulation){

    //control the harvester population:
    popControl(room, 'harvester', currentPopulation);

    //we have harvesters now, so tell them to do something:
    let harvesters = _.filter(Game.creeps, (creep) => creep.memory.role === 'harvester' && creep.room.name === room.name);


    for(let index in harvesters){

        //store current creep (for ease):
        let creep = harvesters[index];

        //ensure creep has a job property in memory:
        if(!creep.memory.job) {creep.memory.job = 'unemployed';}

        //find dropped resources 1st (they decay over time):
        creepCommon.scavenge(creep);

        //get some energy:
        creepCommon.harvest(creep);

        //transfer energy:
        creepCommon.transfer(creep);

        //transfer container/storage:
        creepCommon.transferContainer(creep, RESOURCE_ENERGY);
        
        //transfer energy to tower:
        creepCommon.transferTower(creep);

        //nothing else to do, so upgrade controller:
        creepCommon.upgrade(creep);

    } // for(let creep in harvesters)


}; //module.exports.run