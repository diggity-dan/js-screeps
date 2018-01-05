//strict mode
'use strict';


//require stuff:
const popControl    = require('population.control');
const harvester     = require('role.harvester');
const upgrader      = require('role.upgrader');
const builder       = require('role.builder');
const extractor     = require('role.extractor');
const tower         = require('role.tower');
const mechanic      = require('role.mechanic');
const infantry      = require('role.infantry');
const artillery     = require('role.artillery');
const medic         = require('role.medic');


//main loop:

module.exports.loop = function(){

    //clean up old creep memory:
    for(let name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
        }
    }

    //loop for each room:
    for(let _room in Game.rooms){
        
        let _currentRoom = Game.rooms[_room];

        //run a population check.
        //why run more than once a tick?
        let _populationData = popControl.checkPopulation(_currentRoom);

        
        //ensure at least one harvester is always present:
        if(_populationData['harvester'] === undefined){

            harvester.run(_currentRoom, _populationData);

        } else {

            //pass data to the creep roles:
            harvester.run(_currentRoom, _populationData);
            
            //upgraders:
            upgrader.run(_currentRoom, _populationData);

            //builders:
            builder.run(_currentRoom, _populationData);

            //extractors:
            extractor.run(_currentRoom, _populationData);

            //tower
            tower.run(_currentRoom, _populationData);

            //mechanics:
            mechanic.run(_currentRoom, _populationData);

            //infantry:
            infantry.run(_currentRoom, _populationData);

            //artillery:
            artillery.run(_currentRoom, _populationData);

            //medic:
            medic.run(_currentRoom, _populationData);

        }


    } // for(let_room in Game.rooms)





}; //exports loop