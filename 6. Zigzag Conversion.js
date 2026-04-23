/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
   var convert = function(s, numRows) {
    if (numRows === 1) return s;
    let rows = new Array(numRows).fill("");
    let i = 0;   
    let goDown = true;

    for (let ch of s) {
        rows[i] += ch;
        if (i === 0) {
            goDown = true;
        } 
        else if (i === numRows - 1) {
            goDown = false;
        }
        if (goDown) {
            i++;
        } else { i--; }
        }
    return rows.join(""); 
};
