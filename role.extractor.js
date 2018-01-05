// strict mode:
'use strict';

//require stuff:
const creepCommon   = require('creep.common');
const popControl    = require('population.control');

//export stuff:

module.exports.run = function(room, currentPopulation){

    //control the harvester population:
    popControl.create(room, 'extractor', currentPopulation);

    //we have extractors now, so tell them to do something:
    let extractors = _.filter(Game.creeps, (creep) => creep.memory.role === 'extractor' && creep.room.name === room.name);
    let extractSources = _.map(extractors, (creep) => creep.memory.extractSource);

    //loop extractors, assign job:
    for(let index in extractors){

        //store current creep (for ease):
        let creep = extractors[index];
        
        //assign an extractSource
        if(!creep.memory.extractSource){

                //find unused source:
                let sources = room.find(FIND_SOURCES, {filter: function(source){
                    if(extractSources.indexOf(source.id) === -1){
                        creep.memory.extractSource = source.id;
                    }
                }});

        } //if the creep isn't already assigned a source.

        //ensure creep has a job property in memory:
        if(!creep.memory.job) {creep.memory.job = 'unemployed';}

        //get some energy:
        creepCommon.extract(creep);

    } // for(let creep in extractors)


}; //module.exports.run