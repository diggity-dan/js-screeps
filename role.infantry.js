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
    

    if(hostiles[0] || hostileSites[0] || hostileStructures[0]){
       
        //control the infantry population:
        popControl.create(room, 'infantry', currentPopulation);

    }
    

    //we have infantry now, so tell them to do something:
    let infantry = _.filter(Game.creeps, (creep) => creep.memory.role === 'infantry' && creep.room.name === room.name);

    for(let index in infantry){

        //store current creep (for ease):
        let creep = infantry[index];

        //ensure creep has a job property in memory:
        if(!creep.memory.job) {creep.memory.job = 'unemployed';}

        //attack creeps:
        creepCommon.attack(creep);
      

    } // for(let creep in infantry)


}; //module.exports.run