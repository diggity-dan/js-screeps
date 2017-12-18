// strict mode:
'use strict';

//require stuff:
const creepCommon   = require('creep.common');
const popControl    = require('population.control');

//export stuff:

module.exports.run = function(room, currentPopulation){

    let sites = room.find(FIND_MY_CONSTRUCTION_SITES);
    sites.sort((a,b) => b.progress - a.progress);

    //check for construction sites, if none, just return:
    if(!sites[0]){
        return;
    }

    //control the builder population:
    popControl(room, 'builder', currentPopulation);


    //we have builders now, so tell them to do something:
    let builders = _.filter(Game.creeps, (creep) => creep.memory.role === 'builder' && creep.room.name === room.name);

    for(let index in builders){

        //store current creep (for ease):
        let creep = builders[index];

        //ensure creep has a job property in memory:
        if(!creep.memory.job) {creep.memory.job = 'unemployed';}


        //get energy from containers:
        creepCommon.withdraw(creep, RESOURCE_ENERGY);
        
        //no containers, so scavenge resources 1st (they decay over time):
        creepCommon.scavenge(creep);
 
        //no dropped resources, so harvest source:
        creepCommon.harvest(creep);

        //build stuff:
        creepCommon.build(creep, sites[0]);

        //repair stuff:
        creepCommon.repair(creep);
        
        //upgrade controller:
        creepCommon.upgrade(creep);


    } // for(let creep in builders)


}; //module.exports.run






