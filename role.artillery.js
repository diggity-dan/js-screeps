// strict mode:
'use strict';

//require stuff:
const creepCommon   = require('creep.common');
const popControl    = require('population.control');

//export stuff:

module.exports.run = function(room, currentPopulation){

    //only run if there are hostiles:
    let hostiles = room.find(FIND_HOSTILE_CREEPS);
    let hostileSites = room.find(FIND_HOSTILE_CONSTRUCTION_SITES);
    let hostileStructures = room.find(FIND_HOSTILE_STRUCTURES);
    

    if(!hostiles[0] && !hostileSites[0] && !hostileStructures[0]){
       
        //nothing hostile, just return:
        return;
    }

    //control the artillery population:
    popControl(room, 'artillery', currentPopulation);

    //we have artillery now, so tell them to do something:
    let artillery = _.filter(Game.creeps, (creep) => creep.memory.role === 'artillery' && creep.room.name === room.name);

    //run the artillery:
    for(let index in artillery){

        //store current creep (for ease):
        let creep = artillery[index];

        //ensure creep has a job property in memory:
        if(!creep.memory.job) {creep.memory.job = 'unemployed';}

        //attack creeps:
        creepCommon.attack(creep);

        //kite testing:
        creepCommon.kite(creep, hostiles[0]);
      

    } // for(let creep in artillery)


}; //module.exports.run