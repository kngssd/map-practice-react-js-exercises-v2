//You can ignore the contents of this file
/** Given an array of items, returns a new array with the items shuffled.  Doesn't modify the original array.
 * @template Item
 * @param {Item[]} arr
 * @returns {Item[]}
 */
export function shuffle(arr) {
    return [...arr].sort(() => Math.random() - 0.5);
}
