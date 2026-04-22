 /**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let ans = "";
    for (let i = 0; i < s.length; i++) {
        let left = i;
        let right = i;
             while (left >= 0 && right < s.length && s[left] === s[right]) {
            let str = s.slice(left, right + 1);
            if (str.length > ans.length) {
                ans = str; }
            left--;
            right++;}
        left = i;
        right = i + 1;
             while (left >= 0 && right < s.length && s[left] === s[right]) {
            let str = s.slice(left, right + 1);
            if (str.length > ans.length) {
                ans = str;
            }
            left--;
            right++;
        } }
    return ans;
};
