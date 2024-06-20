//You can ignore the contents of this file
import { shuffle } from "./randomUtils";
/** Returns a short array of random emojis (each a string)
 * @returns {string[]} - An array of emojis (strings)
 */
export function useEmojiGenerator() {
    //prettier-ignore
    const emojis = [ "🌈", "🌞", "🌟", "🌸", "🌺", "🌼", "🍉", "🍓", "🍔", "🍕", "🍦", "🍩", "🍪", "🍭", "🍿", "🎀", "🎁", "🎈", "🎉", "🎨", "🦄", ];

    const shuffledEmojis = shuffle(emojis);
    return shuffledEmojis.slice(0, 6);
}
