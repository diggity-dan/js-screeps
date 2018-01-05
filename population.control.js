//strict mode
'use strict';


//require stuff:
const spawnFactory  = require('spawn.factory');
const creepConfig   = require('creep.config');


//private functions:
let getSource = function(room){

    //return source with the most energy.

    //list of current sources:
    let sources = room.find(FIND_SOURCES);

    //sort
    sources.sort((a,b) => b.energy - a.energy);
    
    //return
    return sources[0];

}; //getSource


//
//exports:
//

module.exports.checkPopulation = function(room){

    //using the supplied room, return creep data.

    //set up some stuff:
    let _returnObj = new Object();
    let _creepList = _.filter(Game.creeps, (creep) => creep.room === room);

    //loop all creeps for this room:
    for(let index in _creepList){

        let _currentRole = _creepList[index].memory.role;

        if(_returnObj[_currentRole]){
            _returnObj[_currentRole] += 1;

        } else {
            _returnObj[_currentRole] = 1;

        } // if/else(_returnObj[_currentRole])      

    } // for(let index in _creepList)

    //done looping creeps, return data.
    return _returnObj;

}; //checkPopulation

module.exports.create = function(room, role, currentPopulation){

    //get best energy source to use:
    let _source = getSource(room);

    //blank creep object:
    let _creepObj = new Object();

    let _config = creepConfig[role];
    let _highLevel = 0;

    //loop through the required energy for the role:
    for(let index in _config.level){

        if(room.energyAvailable >= _config.level[index].requiredEnergy && room.energyCapacityAvailable <= _config.level[index].roomCapacity){
            _highLevel = index;
        }

    } // for(let index in creepConfig[role])

    //ensure we were able to set a level:
    if(_highLevel > 0){

        //population control on all other creeps:
        if(currentPopulation[role] === undefined || currentPopulation[role] < _config.level[_highLevel].total) {
            
            _creepObj.name = role + '-' + Game.time;
            _creepObj.body = _config.level[_highLevel].body;
            _creepObj.memory = {role: role, source: _source.id};
            
        } // if(currentPopulation['role'] === undefined...)

    } // if(_highLevel > 0)


    //send the data to the spawn factory:
    if(_creepObj.body){
        spawnFactory.create(room, _creepObj);
    }


}; // controlPopulation