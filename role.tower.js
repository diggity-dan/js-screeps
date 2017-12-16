//strict mode
'use strict';


//require stuff:


//export stuff:


module.exports.run = function(room, currentPopulation){

    //list of towers:
    let towers = room.find(FIND_MY_STRUCTURES, {filter: function(structure){
        return structure.structureType === STRUCTURE_TOWER;
    }});


    if(towers[0]){

        //get hostile creeps:
        let enemies = room.find(FIND_HOSTILE_CREEPS);
        enemies.sort((a,b) => a.hits - b.hits);

        //get injured creeps:
        let injured = room.find(FIND_MY_CREEPS, {filter: (creep) => creep.hits < creep.hitsMax});
        injured.sort((a,b) => a.hits - b.hits);

        //get broken buildings:
        let damagedStuff = room.find(FIND_STRUCTURES, {filter: (structure) => structure.hits < structure.hitsMax});
        damagedStuff.sort((a,b) => a.hits - b.hits);

        //loop towers:
        for(let index in towers){

            //attack
            if(enemies[0]){
                towers[index].attack(enemies[0]);
                return;
            } //if(enemies[0])

            //heal
            if(injured[0]){
                towers[index].heal(injured[0]);
                return;
            } // if(injured[0])

            //repair
            if(damagedStuff[0]){
                //only allow tower to use 1/2 energy for repairs:
                if(towers[index].energy > (towers[index].energyCapacity / 2) ) {
                    towers[index].repair(damagedStuff[0]);
                    return;
                }
                
            } //if(damagedStuff[0])

        } // for(let index in towers)
        

    } // if(towers[0])

}; //run