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
    let hostile;

    //try to take care of creeps 1st:
    if(hostiles[0]){

        hostiles.sort((a,b) => a.hits - b.hits);

        //check for healers:
        let healers = _.filter(hostiles, function(hostile){
            if(hostile.getActiveBodyparts(HEAL) > 0) {
                return hostile;
            }
        });

        //check for ranged:
        let ranged = _.filter(hostiles, function(hostile){
            if(hostile.getActiveBodyparts(RANGED_ATTACK) > 0) {
                return hostile;
            }
        }); 

        //assign target:
        if(healers[0]){
            hostile = healers[0];    
        } else if (ranged[0]){
            hostile = ranged[0];
        } else {
            hostile = hostiles[0];
        }
        
    }
    //next take care of hostile construction sites:
    else if (hostileSites[0]) {
        hostileSites.sort((a,b) => a.hits - b.hits);
        hostile = hostileSites[0];
    }
    //next take care of hostile structures:
    else if (hostileStructures[0]){
        hostileStructures.sort((a,b) => a.hits - b.hits);
        hostile = hostileStructures[0];
    }
    else{
        //nothing hostile, just return:
        return;
    }
    

    //control the infantry population:
    popControl(room, 'infantry', currentPopulation);

    //we have infantry now, so tell them to do something:
    let infantry = _.filter(Game.creeps, (creep) => creep.memory.role === 'infantry' && creep.room.name === room.name);


    for(let index in infantry){

        //store current creep (for ease):
        let creep = infantry[index];

        //ensure creep has a job property in memory:
        if(!creep.memory.job) {creep.memory.job = 'unemployed';}

        //attack creeps:
        creepCommon.attack(creep, hostile);
      

    } // for(let creep in infantry)


}; //module.exports.run