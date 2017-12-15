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


        //check if there are containers to use:
        let targets = creep.room.find(FIND_STRUCTURES, {
            filter: function(structure){
                if (structure.structureType === STRUCTURE_CONTAINER && structure.store[RESOURCE_ENERGY] > 0){
                    return structure;
                }
            } //filter function
        });

        //if so, get energy from containers:
        if(targets[0]){
            creepCommon.withdraw(creep, RESOURCE_ENERGY, targets[0]);
        }

        //no containers, so find dropped resources 1st (they decay over time):
        creepCommon.scavenge(creep);

        //nothing to scavenge, so get some energy:
        creepCommon.harvest(creep);

        //If there are towers, just transfer energy to tower.:
        let towers = room.find(FIND_MY_STRUCTURES, {filter: function(structure){
            return structure.structureType === STRUCTURE_TOWER;
        }});

        if(towers[0]){

            //transfer energy to tower:
            creepCommon.transferTower(creep);

        } else {

            //repair stuff:
            creepCommon.repair(creep);
        }

        // nothing else to do, so upgrade controller:
        creepCommon.upgrade(creep);


    } // for(let creep in mechanics)


}; //module.exports.run