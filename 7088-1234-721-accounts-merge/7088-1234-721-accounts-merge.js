/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
// class Uf {
//     _sizes = [];
//     _ids = [];
//     _numberOfComponents = 0;

//     constructor(N) {
//         for (let i = 0; i < N; i++) {
//             this._ids[i] = i;
//             this._sizes[i] = 0;
//         }
//         this._numberOfComponents = N;
//     }

//     union(p, q) {
//         const pRoot = this.find(p);
//         const qRoot = this.find(q);
//         if (pRoot === qRoot) {
//             return;
//         }
//         // weighing Approach
//         if (this._sizes[pRoot] > this._sizes[qRoot]) {
//             this._ids[qRoot] = pRoot;
//             this._sizes[pRoot] += this._sizes[qRoot];
//         } else {
//             this._ids[pRoot] = qRoot;
//             this._sizes[qRoot] += this._sizes[pRoot];
//         }
//         this._numberOfComponents--;
//     }

//     find(p) {
//         let root = p
//         while (root !== this._ids[root]) {
//             root = this._ids[root];
//         }
//         // Compress the path
//         while (p !== root) {
//             let next = this._ids[p];
//             this._ids[p] = root;
//             p = this._ids[next];
//         }
//         return root;
//     }

//     count() {
//         return this._numberOfComponents;
//     }
// }

// var accountsMerge = function (accounts) {
//     let uf = new Uf(accounts.length);
    
//     for (let i = 0; i < accounts.length ;i++){
//         for (let j = i + 1; j < accounts.length; j++) {
//             for(let k = 1 ; k < accounts[i].length; k++ ) {
//                 for(let e = 1 ; e < accounts[j].length ; e++) {
//                     if(accounts[i][k] === accounts[j][e]){          
//                        uf.union(i, j)                                 
//                     } 
                    
//                 }                
                
//             }
            
//         }
//     }
//     let res = {}
//     for (let i in uf._ids) {
//         let root = uf.find(i)
//         if (!res[root]) {
//             res[root] = []
//         }
//         res[root].push(...accounts[i].slice(1))
//     }
//     let result = []
//     for (let k in res) {
//         result.push([accounts[k][0], ...[...new Set(res[k])].sort()])
//     }    

//     return result
// };

// optimal solution 
class UF {
    constructor(n) {
        this._ids = {}
    }
    add(x) {
        if (!this._ids[x]) {
            this._ids[x] = x

        }
    }

    find(x) {
        if(x !== this._ids[x]) {
            this._ids[x] = this.find(this._ids[x])
        }
        return this._ids[x]
    }
    union(p, q) {
        let pID = this.find(p)
        let qID = this.find(q)
        if (pID !== qID) {
            this._ids[qID] = pID
        }
    }
}


var accountsMerge = function (accounts) {
    let uf = new UF() 
    let emailToOwner = {}

    for(let account of accounts) {
        name = account[0]
        for (let i = 1; i < account.length; i++){
            let email = account[i]
            uf.add(account[i])
            uf.union( account[1] , email)  
            emailToOwner[email] = name  
        }
    }

    let connectedOne = {}
    for (let email of Object.keys(emailToOwner)) {
        let idRoot = uf.find(email) 
        if (!connectedOne[idRoot]){            
            connectedOne[idRoot] = []
        }
        connectedOne[idRoot].push(email)
    }
    let result = []
    for (let account in connectedOne) {
       let emails = (connectedOne[account]).sort()
       let name = emailToOwner[account]
    
      result.push([name, ...emails])
        
    }  
    
    return result
    
}

