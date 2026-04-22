/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let mca = new ListNode(0);
    let bca = mca;
    let mba = 0;
    while (l1 || l2 || mba) {
        let sum = mba;
     if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        mba = Math.floor(sum / 10);
        bca.next = new ListNode(sum % 10); 
        bca = bca.next;
    }
    return mca.next;
}; 
