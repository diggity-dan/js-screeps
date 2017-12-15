// strict mode:
'use strict';

//require stuff:


//export stuff:

module.exports.create = function(room, creepData){

    //list of room spawns:
    let roomSpawns = _.filter(Game.spawns, (spawn) => spawn.room.name == room.name);

    //loop spawns:
    for(let _spawn in roomSpawns){

        //check if it's active. If so, continue loop:
        if(roomSpawns[_spawn].spawning){
            continue;
        }

        //check if the spawn can create the desired creep:
        let spawnCheck = roomSpawns[_spawn].spawnCreep(creepData.body, creepData.name, {dryRun: true});

        //if check passes spawn, else return the code:
        if (spawnCheck === OK){

            //add visualization:
            roomSpawns[_spawn].room.visual.text(
                '🛠️' + creepData.memory.role,
                roomSpawns[_spawn].pos.x + 1,
                roomSpawns[_spawn].pos.y,
                {align: 'left', opacity: 0.8}
            );
            
            //run the spawn, and return the code:
            roomSpawns[_spawn].spawnCreep(creepData.body, creepData.name, {memory: creepData.memory});
            console.log('Spawning: ' + creepData.memory.role + ' body: ' + JSON.stringify(creepData.body));

        } else {

            return spawnCheck;

        } // if/else(spawnCheck === OK)

    } // for(_spawn in roomSpawns)

}; //create