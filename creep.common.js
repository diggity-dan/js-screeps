// strict mode:
'use strict';

//require stuff:
const pathCommon    = require('path.common'); 

//TODO:


//export stuff:

module.exports.scavenge = function(creep){

    //turn on scavenge, if creep has some energy capacity:
    if(creep.memory.job === 'unemployed' && creep.carry.energy < creep.carryCapacity){
        creep.memory.job = 'scavenge';
        creep.say('🔍 scavenge');
    }

    //turn off scavenge, capacity full:
    if(creep.memory.job === 'scavenge' && creep.carry.energy === creep.carryCapacity){
        creep.memory.job = 'unemployed';
        creep.say('✔ done!');
    }

    //tell creep to scavenge:
    if(creep.memory.job === 'scavenge'){
        
        //get list of resources:
        let targets = creep.room.find(FIND_DROPPED_RESOURCES, {filter: function(resource){
            if(resource.resourceType === 'energy'){
                return resource;
            }
        }});

        //sort
        targets.sort((a,b) => b.amount - a.amount);

        //go grab the energy:
        if(targets[0]){
            
            if(creep.pickup(targets[0]) === ERR_NOT_IN_RANGE) {
                creep.moveTo(targets[0]);
            }

        } else {
            //no targets, return to controller.
            creep.memory.job = 'unemployed';
    
        } // if/else(targets[0])

    } // if(creep.memory.job === 'scavenge')

}; //scavenge

module.exports.harvest = function(creep){

    //get the creep's assigned source:
    let creepSource = Game.getObjectById(creep.memory.source);


    //turn on harvest:
    if(creep.memory.job === 'unemployed' && creep.carry.energy < creep.carryCapacity){
        creep.memory.job = 'harvest';
        creep.say('🔄 harvest');

    }

    //turn off harvest, capacity is full:
    if(creep.memory.job === 'harvest' && creep.carry.energy === creep.carryCapacity){
        creep.memory.job = 'unemployed';
        creep.say('🍕 full');
    }
    
    //harvest is true, go get some energy from the assigned source:
    if(creep.memory.job === 'harvest') {

        if(creep.harvest(creepSource) == ERR_NOT_IN_RANGE) {
            creep.moveTo(creepSource, {visualizePathStyle: {stroke: '#ffaa00'}});
        }

    } // if(creep.memory.harvest)


}; //harvest

module.exports.upgrade = function(creep){

    //turn on upgrade, if creep has some energy:
    if(creep.memory.job === 'unemployed' && creep.carry.energy > 0){
        creep.memory.job = 'upgrade';
        creep.say('⚡ upgrade');
    }

    //turn off upgrade, no more energy:
    if(creep.memory.job === 'upgrade' && creep.carry.energy === 0){
        creep.memory.job = 'unemployed';
        creep.say('✔ done!');
    }


    //set state (upgrade):
    if(creep.memory.job === 'upgrade') {
      
        if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
            creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffffff'}});
        }

    } // (if creep.memory.job === 'upgrade')


}; //upgrade

module.exports.build = function(creep, constructionSite = undefined){


    //turn on build, if creep has some energy:
    if(creep.memory.job === 'unemployed' && creep.carry.energy > 0){
        creep.memory.job = 'build';
        creep.say('🚧 build');
    }

    //turn off build, no more energy:
    if(creep.memory.job === 'build' && creep.carry.energy === 0){
        creep.memory.job = 'unemployed';
        creep.say('✔ done!');
    }

    //state build, and energy so find something to do:
    if(creep.memory.job === 'build') {

        //if no site has been passed in:

        if(!constructionSite){
            //get a list of all the construction sites/sort by progress:
            let targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            targets.sort((a,b) => b.progress - a.progress);

            if(targets[0]){
                //set the construction site:
                constructionSite = targets[0];
            } else {
                //no construction sites, so clear job:
                creep.memory.job = 'unemployed';
            } // if/else(targets[0])

        } else {
            
            //send the creep to the high score:
            if(creep.build(constructionSite) == ERR_NOT_IN_RANGE) {
                creep.moveTo(constructionSite, {visualizePathStyle: {stroke: '#ffffff'}});
            }

        } // if/else(!constructionSite)


        
    } //if(creep.memory.job === 'build')


}; //build

module.exports.transfer = function(creep, priority = []){
    
    //improve transfer by checking memory for existing
    //transfer targets assigned to other creeps.
    //one way to do this would be using a global memory object.
    //would just need to be a list of objectID's

    //structure priority, set tp default if nothing passed in:
    if(!priority.length){
        let priority = [STRUCTURE_SPAWN,STRUCTURE_EXTENSION];
    }

    
    //turn on transfer, if creep has some energy:
    if(creep.memory.job === 'unemployed' && creep.carry.energy > 0){
        creep.memory.job = 'transfer';
        creep.say('♻ transfer');
    }

    //turn off transfer, no more energy:
    if(creep.memory.job === 'transfer' && creep.carry.energy === 0){
        creep.memory.job = 'unemployed';
        creep.say('✔ done!');
    }

    //run transfer:
    if(creep.memory.job === 'transfer'){

        //find some targets that are missing energy:
        let targets = creep.room.find(FIND_MY_STRUCTURES, {
            filter: function(structure){
                if (structure.energy < structure.energyCapacity && structure.structureType !== STRUCTURE_TOWER){
                    return structure;
                }
            } //filter function
        });

        
        if(targets.length > 0) {

            //sort highest to lowest:
            targets.sort((a,b) => b.energy - a.energy );

            /*
            let highScore = targets[0];

            for(let index in targets){

                let _currentTarget = targets[index];
                let _currentComplete = _currentTarget.energy / _currentTarget.energyCapacity * 100;
                let _highScoreComplete = highScore.energy / highScore.energyCapacity * 100;

                //bump priority if high score is in the priority list:
                if(priority.includes(highScore.structureType)){
                    _highScoreComplete += 10;
                }

                //bump priority if structure is in the priority list:
                if(priority.includes(_currentComplete.structureType)){
                    _currentComplete += 10;
                }

                //compare current target to high score:
                if(_currentComplete > _highScoreComplete){
                    highScore = _currentTarget;
                }

            } // for(let index in targets) 
            */


            if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
            }

        } else {
            //no targets, so clear job:
            creep.memory.job = 'unemployed';

        } // if/else (targets.length > 0)


    } // if(creep.memory.job === 'transfer')


}; //transfer

module.exports.transferContainer = function(creep, resource){
    
    //turn on transfer, if creep has some energy:
    if(creep.memory.job === 'unemployed' && creep.carry[resource] > 0){
        creep.memory.job = 'transferContainer';
        creep.say('♻ transfer');
    }

    //turn off transfer, capacity is full:
    if(creep.memory.job === 'transferContainer' && creep.carry[resource] === 0){
        creep.memory.job = 'unemployed';
        creep.say('✔ done!');
    }

    //run transfer:
    if(creep.memory.job === 'transferContainer'){

        //find some targets that are missing energy:
        let targets = creep.room.find(FIND_STRUCTURES, {
            filter: function(structure){
                if ( (structure.structureType === STRUCTURE_CONTAINER || structure.structureType === STRUCTURE_STORAGE) 
                        && _.sum(structure.store) < structure.storeCapacity){
                    return structure;
                }
            } //filter function
        });

        targets.sort((a,b) => b.store[resource] - a.store[resource] );


        if(targets.length > 0) {

            if(creep.transfer(targets[0], resource) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
            }

        } else {
            //no targets, so clear job:
            creep.memory.job = 'unemployed';

        } // if/else (targets.length > 0)


    } // if(creep.memory.job === 'transferContainer')


}; //transferContainer

module.exports.transferTower = function(creep){
       
    //turn on transfer, if creep has some energy:
    if(creep.memory.job === 'unemployed' && creep.carry.energy > 0){
        creep.memory.job = 'transferTower';
        creep.say('♻ transfer');
    }

    //turn off transfer, capacity is full:
    if(creep.memory.job === 'transferTower' && creep.carry.energy === 0){
        creep.memory.job = 'unemployed';
        creep.say('✔ done!');
    }

    //run transfer:
    if(creep.memory.job === 'transferTower'){

        //find some targets that are missing energy:
        let targets = creep.room.find(FIND_STRUCTURES, {
            filter: function(structure){
                if (structure.structureType === STRUCTURE_TOWER && structure.energy < structure.energyCapacity){
                    return structure;
                }
            } //filter function
        });

        targets.sort((a,b) => a.energy - b.energy );


        if(targets.length > 0) {

            if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
            }

        } else {
            //no targets, so clear job:
            creep.memory.job = 'unemployed';

        } // if/else (targets.length > 0)


    } // if(creep.memory.job === 'transfer')


}; //transferTower

module.exports.extract = function(creep){
    
    //get the creep's assigned source:
    let extractSource = Game.getObjectById(creep.memory.extractSource);


    //turn on extract:
    if(creep.memory.job === 'unemployed'){
        creep.memory.job = 'extract';
        creep.say('🔄 extract');

    }

    //turn off extract, capacity is full:
    if(creep.memory.job === 'extract' && extractSource.energy <= 0){
        creep.memory.job = 'unemployed';
        creep.say('✔ done!');
    }
    
    //extract is true, go get some energy from the assigned source:
    if(creep.memory.job === 'extract') {

        if(creep.harvest(extractSource) == ERR_NOT_IN_RANGE) {
            creep.moveTo(extractSource, {visualizePathStyle: {stroke: '#ffaa00'}});
        }

    } // if(creep.memory.harvest)

}; //extract

module.exports.repair = function(creep){

    //turn on repair, if creep has some energy:
    if(creep.memory.job === 'unemployed' && creep.carry.energy > 0){
        creep.memory.job = 'repair';
        creep.say('🔨 repair');
    }

    //turn off repair, no energy:
    if(creep.memory.job === 'repair' && creep.carry.energy === 0){
        creep.memory.job = 'unemployed';
        creep.say('✔ done!');
    }


    //run repair:
    if(creep.memory.job === 'repair'){

        //get list of stuff
        let targets = creep.room.find(FIND_STRUCTURES, {
            filter: object => object.hits < object.hitsMax
        });
        
        //sort
        targets.sort((a,b) => a.hits - b.hits);
        
        //
        if(targets.length > 0) {
            if(creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targets[0]);
            }
        } else {
            //nothing to repair, reset job:
            creep.memory.job = 'unemployed';

        }

    } // if(creep.memory.job === 'repair')


} //repair

module.exports.withdraw = function(creep, resource, container = undefined){
    
    //turn on withdraw, if creep has no resource:
    if(creep.memory.job === 'unemployed' && creep.carry[resource] === 0){
        creep.memory.job = 'withdraw';
        creep.say('withdraw');
    }

    //turn off withdraw, full energy:
    if(creep.memory.job === 'withdraw' && creep.carry[resource] === creep.carryCapacity){
        creep.memory.job = 'unemployed';
        creep.say('✔ done!');
    }


    //run withdraw:
    if(creep.memory.job === 'withdraw'){


        //if the container hasn't been specified, find one:
        if(!container){
            //find containers with energy:
            let targets = creep.room.find(FIND_STRUCTURES, {
                filter: function(structure){
                    if ( (structure.structureType === STRUCTURE_CONTAINER || structure.structureType === STRUCTURE_STORAGE) 
                        && structure.store[resource] > 0){
                        return structure;
                    }
                } //filter function
            });

            if(targets[0]){
                //sort by most resource:
                targets.sort((a,b) => b.store[resource] - a.store[resource] );

                //set the container:
                container = targets[0];

            } else {

                creep.memory.job = 'unemployed';

            }


        } else {

            //ensure the container passed in has resources:
            if(container.store[resource] === 0){
                creep.memory.job = 'unemployed';
            }

        }// if/else(!container)

        //finally withdraw:
        if(creep.withdraw(container, resource) == ERR_NOT_IN_RANGE) {
            creep.moveTo(container, {visualizePathStyle: {stroke: '#ffffff'}});
        }

    } // if(creep.memory.job === 'withdraw')
    
    
} //withdraw

module.exports.attack = function(creep, hostile = undefined){

    //set a target if one wasn't passed in:
    if(!hostile){

        let hostiles = creep.room.find(FIND_HOSTILE_CREEPS);
        let hostileSites = creep.room.find(FIND_HOSTILE_CONSTRUCTION_SITES);
        let hostileStructures = creep.room.find(FIND_HOSTILE_STRUCTURES);

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
                // kill heals 1st
                hostile = healers[0];    
            } else if (ranged[0]){
                // then ranged
                hostile = ranged[0];
            } else {
                // then melee:
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

    } // if(!hostile)


    //turn on attack:
    if(creep.memory.job === 'unemployed' && hostile){
        creep.memory.job = 'attack';
        creep.say('attack');
    }

    //turn off attack:
    if(creep.memory.job === 'attack' && !hostile){
        creep.memory.job = 'unemployed';
    }


    //run attack:
    if(creep.memory.job === 'attack'){

        //if ranged:
        if(creep.getActiveBodyparts(RANGED_ATTACK) > 0){

            //ensure to kite creeps:
            module.exports.kite(creep, hostile);

            //attack, move closer if too far away:
            if(creep.rangedAttack(hostile) == ERR_NOT_IN_RANGE) {
                creep.moveTo(hostile);
            }

        } else {

            //going for melee:
            if(creep.attack(hostile) == ERR_NOT_IN_RANGE){
                creep.moveTo(hostile);
            }

        } // if/else(creep.getActiveBodyparts(RANGED_ATTACK) > 0)


    } // if(creep.memory.job === 'attack')

}; //attack

module.exports.heal = function(creep, friendly = undefined){

    //set a target if one wasn't passed in:
    if(!friendly){

        let friendlies = creep.room.find(FIND_MY_CREEPS, {
            filter: function(friendly){
                if(friendly.hits < friendly.hitsMax){return friendly;}
            }
        });

        //try to take care of creeps 1st:
        if(friendlies[0]){
            
            friendlies.sort(function(a,b){
                let hitsA = a.hits;
                let hitsB = b.hits;
                let maxA = a.hitsMax;
                let maxb = b.hitsMax;

                if(hitsA < hitsB){return 1;}
                if(hitsA > hitsB){return -1;}
                if(maxA < maxb){return 1;}
                if(maxA > maxb){return -1;}

                return 0;
            });
            
            //check for healers:
            let healers = _.filter(friendlies, function(index){
                if(index.getActiveBodyparts(HEAL) > 0) {
                    return index;
                }
            });
    
            //check for ranged:
            let ranged = _.filter(friendlies, function(index){
                if(index.getActiveBodyparts(RANGED_ATTACK) > 0) {
                    return index;
                }
            });
    
            //assign target:
            if(healers[0]){
                // heals 1st
                friendly = healers[0];    
            } else if (ranged[0]){
                // the ranged
                friendly = ranged[0];
            } else {
                // then melee:
                friendly = friendlies[0];
            }


        } // if(friendlies[0])


    } // if(!hostile)


    //turn on attack:
    if(creep.memory.job === 'unemployed' && friendly){
        creep.memory.job = 'heal';
        creep.say('heal');
    }

    //turn off attack:
    if(creep.memory.job === 'heal' && !friendly){
        creep.memory.job = 'unemployed';
    }


    //run heal:
    if(creep.memory.job === 'heal'){

        console.log('Trying to heal: ' + JSON.stringify(friendly.name));

        //try to heal:
        if(creep.heal(friendly) == ERR_NOT_IN_RANGE){

            //now try to ranged heal:
            if(creep.rangedHeal(friendly) == ERR_NOT_IN_RANGE){

                //neither worked, so move closer:
                creep.moveTo(friendly);

            } // if(creep.rangedHeal...)
            
        } // if(creep.heal....)

        
    } // if(creep.memory.job === 'heal')

}; //heal

module.exports.kite = function(creep, hostile = undefined){

    //return if no hostile has been passed.
    //this is to prevent erratic kiting of different hostiles.
    //this method is intended to be called by other methods, like attack.
    if(!hostile){
        return;
    } // if(!hostile)

    //get room context:
    let _thisRoom = creep.room.name;

    //kiting doesn't require any memory.job settings, this should be taken care of
    //by the calling method.

    const range = creep.pos.getRangeTo(hostile);
    
    /*
    //direction constants:
    TOP
    TOP_RIGHT
    RIGHT
    BOTTOM_RIGHT
    BOTTOM
    BOTTOM_LEFT
    LEFT
    TOP_LEFT
    */

    if(range <= 3) {

        //set up a new pathfinder:
        let fleePath = PathFinder.search(creep.pos, {pos: hostile.pos, range: 3}, {flee: true, maxRooms: 1, roomCallback: function(_thisRoom){

            //callback doesn't allow passing a room object. Need to build it here:
            let room = Game.rooms[_thisRoom];

            //get the cost matrix from the getCostMatrix function:
            let costs = pathCommon.getCostMatrix(room);

            //return the costs to pathfinder:
            return costs;

        }});

        //get the 1st position from the path:
        let pos = fleePath.path[0];

        //move the creep:
        let returnVal = creep.moveTo(pos);

    } // if(range < 3)


}; //kite

module.exports.rally = function(creep, flagName){

    //find the specified flag:
    let flags = creep.room.find(FIND_FLAGS, {filter: {
            name: flagName
        }
    });

    //only run if the flag was found:
    if(flags[0]){

        //get the range to the flag:
        const range = creep.pos.getRangeTo(flags[0]);
        const acceptableRange = 3;
      

        //turn on rally:
        if(creep.memory.job === 'unemployed' && flags[0] && acceptableRange !== range){
            creep.memory.job = 'rally';
            creep.say('rally');
        }

        //turn off rally:
        if(creep.memory.job === 'rally' && range === acceptableRange){
            creep.memory.job = 'unemployed';
        }


        //run rally:
        if(creep.memory.job === 'rally'){
        
            //if the range is less than acceptable, move there:
            if(acceptableRange < range) {

                creep.moveTo(flags[0].pos, {range: 3, visualizePathStyle: {stroke: '#ffffff'}});
                
            } // if(range < acceptableRange)

        } //if(creep.memory.job === 'rally')        

    } // if(flags[0])

}; //rally
