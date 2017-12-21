// strict mode:
'use strict';

//require stuff:
const creepCommon   = require('creep.common');
const popControl    = require('population.control');

//export stuff:

module.exports.run = function(room, currentPopulation){

    let sites = room.find(FIND_MY_CONSTRUCTION_SITES);
    sites.sort((a,b) => b.progress - a.progress);

    //we have builders now, so tell them to do something:
    let builders = _.filter(Game.creeps, (creep) => creep.memory.role === 'builder' && creep.room.name === room.name);

    //check for construction sites, if none, just return:
    if(!sites[0]){

        //remove builders once construction is finished:
        if(builders.length > 0){

            for(let index in builders){
                builders[index].suicide();
            } //for(let index in builders)

        } // if(builders.length > 0)

        //return so we don't waste time creating/running:
        return;
    } // if(!sites[0])
    

    //control the builder population:
    popControl(room, 'builder', currentPopulation);

    //run the builders:
    for(let index in builders){

        //store current creep (for ease):
        let creep = builders[index];

        //ensure creep has a job property in memory:
        if(!creep.memory.job) {creep.memory.job = 'unemployed';}


        //get energy from containers/storage:
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






