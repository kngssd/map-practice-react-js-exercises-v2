import { useEmojiGenerator } from "./useEmojiGenerator";

export default function MapPractice1() {
    const emojisArray = useEmojiGenerator();
    console.log("emojisArray", emojisArray);

    return (
        <div className="mapPractice">
            <h2>Map Practice 1</h2>
            <div className="emojiList">
                This is where your emojis need to go! (See expected1.html)
            </div>
        </div>
    );
}
