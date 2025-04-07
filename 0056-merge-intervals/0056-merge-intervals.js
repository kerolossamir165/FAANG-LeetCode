/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals = intervals.sort((arr1, arr2) => arr1[0] - arr2[0])
    // let intervalTree = new Interval()

    // for (let i = 0; i < intervals.length; i++) {
        
    //     intervalTree.addInterval(intervals[i][0], intervals[i][1])
    // }  

    // return intervalTree.traverse()


    let result = []

    for(let interval of intervals) {
        if(result.length === 0 || result[result.length -1][1] < interval[0]) {
            result.push(interval)
        } else {
            result[result.length -1][1] = Math.max(interval[1] , result[result.length -1][1])
        }

    }
    return result
};

// class IntervalNode {
//     constructor(lo, hi) {
//         this.interval = [lo, hi]; 
//         this.max = hi; 
//         this.left = null; 
//         this.right = null;
//     }
// }

// class Interval {
//     constructor(list) {
//         this.root = null     
//     }
//     addInterval(low , hi) {        
//         this.root =  this._addInterval(this.root , low , hi)
//     }
//     _addInterval(node , nodeLow ,nodeHi) {
//         if(node === null) {
//             return new IntervalNode(nodeLow,  nodeHi)
//         }
//         let [low , hi ] = node.interval
//         if (nodeLow <= hi && nodeHi >= low) {
//             node.interval[0] = Math.min(nodeLow , low)
//             node.interval[1] = Math.max(nodeHi, hi)

//         } else if  (nodeLow < low) {
//             node.left = this._addInterval(node.left, nodeLow , nodeHi)
//         } else  {
//             node.right = this._addInterval(node.right, nodeLow, nodeHi)
//         }
//         return node
//     }
//     traverse() {
//         let merged = []
//         this._traverse(this.root , merged)
//         return merged
//     }
//     _traverse(node , list) {
//         if (node === null) return;
//             this._traverse(node.left, list)
//             list.push(node.interval)
//             this._traverse(node.right, list)
        
//     }
// }