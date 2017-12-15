//strict mode
'use strict';


//require stuff:
const spawnFactory  = require('spawn.factory');
const creepCommon   = require('creep.common');
const creepConfig   = require('creep.config');


//exports:

module.exports = function(room, role, currentPopulation){

    //get best energy source to use:
    let _source = creepCommon.getSource(room);

    //blank creep object:
    let _creepObj = new Object();

    let _config = creepConfig[role];
    let _highLevel = 1

    //loop through the required energy for the role:
    for(let index in _config.level){

        if(room.energyAvailable >= _config.level[index].requiredEnergy){
            _highLevel = index;
        }

    } // for(let index in creepConfig[role])


    //ensure there's at least one harvester:
    if(currentPopulation['harvester'] === undefined){

        _creepObj.name = 'harvester-' + Game.time;
        _creepObj.body = creepConfig.harvester.level[_highLevel].body;
        _creepObj.memory = {role: 'harvester', source: _source.id};

    } else {

        //population control on all other creeps:
        if(currentPopulation[role] === undefined || currentPopulation[role] < _config.level[_highLevel].total) {
            
            _creepObj.name = role + '-' + Game.time;
            _creepObj.body = _config.level[_highLevel].body;
            _creepObj.memory = {role: role, source: _source.id};
            
        } // if(currentPopulation['role'] === undefined...)

    } // if/else(currentPopulation['harvester'] === undefined)


    //send the data to the spawn factory:
    if(_creepObj.body){
        spawnFactory.create(room, _creepObj);
    }


}; // controlPopulation