// strict mode:
'use strict';

//require stuff:
const creepCommon   = require('creep.common');
const popControl    = require('population.control');

//export stuff:

module.exports.run = function(room, currentPopulation){
  
    let hostiles = room.find(FIND_HOSTILE_CREEPS);

    //control the medic population:
    if(hostiles[0]){
        popControl.create(room, 'medic', currentPopulation);
    }
    
    //we have medics now, so tell them to do something:
    let medics = _.filter(Game.creeps, (creep) => creep.memory.role === 'medic' && creep.room.name === room.name);


    for(let index in medics){

        //store current creep (for ease):
        let creep = medics[index];

        //ensure creep has a job property in memory:
        if(!creep.memory.job) {creep.memory.job = 'unemployed';}

        //heal creeps:
        creepCommon.heal(creep);

        //rally:
        creepCommon.rally(creep, "RallyPoint");
              
        
    } // for(let creep in medic)


}; //module.exports.run