// strict mode:
'use strict';

//require stuff:
const creepCommon   = require('creep.common');
const popControl    = require('population.control');

//export stuff:

module.exports.run = function(room, currentPopulation){

    //control the upgrader population:
    popControl.create(room, 'upgrader', currentPopulation);


    //we have upgraders now, so tell them to do something:
    let upgraders = _.filter(Game.creeps, (creep) => creep.memory.role === 'upgrader' && creep.room.name === room.name);

    for(let index in upgraders){

        //store current creep (for ease):
        let creep = upgraders[index];

        //ensure creep has a job property in memory:
        if(!creep.memory.job) {creep.memory.job = 'unemployed';}

        //get energy from containers/storage:
        creepCommon.withdraw(creep, RESOURCE_ENERGY);
        
        //find dropped resources 1st (they decay over time):
        creepCommon.scavenge(creep);

        //get some energy:
        creepCommon.harvest(creep);

        //transfer energy:
        creepCommon.transfer(creep);

        //upgrade controller:
        creepCommon.upgrade(creep);


    } // for(let creep in upgraders)


}; //module.exports.run






