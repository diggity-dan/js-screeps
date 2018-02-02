//strict mode
'use strict';


//import stuff:



//export stuff:

module.exports.getCostMatrix = function(room){

    if(!room){return;}

    let costs = new PathFinder.CostMatrix;

    //set creep cost:
    room.find(FIND_CREEPS).forEach(function(creep) {
        costs.set(creep.pos.x, creep.pos.y, 255);
    });

    //set structure cost:
    room.find(FIND_STRUCTURES).forEach(function(struct) {
        if (struct.structureType === STRUCTURE_ROAD) {
            // Favor roads over plain tiles
            costs.set(struct.pos.x, struct.pos.y, 1);
        } 
        else if (struct.structureType !== STRUCTURE_CONTAINER && (struct.structureType !== STRUCTURE_RAMPART || !struct.my) ) {
            // Can't walk through non-walkable buildings
            costs.set(struct.pos.x, struct.pos.y, 255);
        }
    });


    //set the cost matrix on the room memory:
    room.memory.savedMatrix = costs.serialize();

    //use the matrix in other functions by:
    //let costs = PathFinder.CostMatrix.deserialize(room.memory.savedMatrix);

    //also return to the caller:
    return costs;

}; //getCostMatrix
