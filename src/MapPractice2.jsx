import { useMovieGenerator } from "./useMovieGenerator";
export default function MapPractice2() {
    const [movies, regenerate] = useMovieGenerator();
    console.log("movies", movies);

    return (
        <div className="mapPractice">
            <h2>Map Practice 2</h2>
            <button onClick={regenerate}>Change Movies</button>
            <div className="movieList">
                This is where your movies need to go! (See expected2.html)
            </div>
        </div>
    );
}
