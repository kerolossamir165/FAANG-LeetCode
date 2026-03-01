/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
    let slots = 1;
    let nodes = preorder.split(',');

    for (let node of nodes) {
        slots--;

        if (slots < 0) return false;

        if (node !== '#') {
            slots += 2;
        }
    }

    return slots === 0;
};
