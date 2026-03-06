/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function (n, headID, manager, informTime) {

    let totalTime = 0
    let employee = Array.from({ length: n }, () => []);

    for (let i = 0; i < n; i++) {
        if (manager[i] !== -1) {
            employee[manager[i]].push(i)
        }
    }
    function calculateTime(currentEmployee, currentTime) {
        totalTime = Math.max(currentTime, totalTime)

        for (let el of employee[currentEmployee]) {
            calculateTime(el, currentTime + informTime[currentEmployee])
        }
    }
    calculateTime(headID, 0)

    return totalTime

};