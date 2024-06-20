import { useEmojiGenerator } from "./useEmojiGenerator";

export default function MapPractice1() {
    const emojisArray = useEmojiGenerator();
    console.log("emojisArray", emojisArray);
    const emojiDisplay = (emoji => { 
        return (<div key={emoji} className ="emoji">{emoji}</div>)
        })

    return (
        <div className="mapPractice">
            <h2>Dana&apos;s Random Emojis</h2>
            <div className="emojiList">
                {emojisArray.map(emojiDisplay)}
            </div>
        </div>
    );
}

