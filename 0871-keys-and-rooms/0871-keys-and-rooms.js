/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {

    let visited = new Set()

    function dfs(key) {

        visited.add(key)

        for(let room of rooms[key]) {
            if(!visited.has(room)) {
                dfs(room)
            }
        }
    }

    dfs(0)
    return visited.size === rooms.length
};