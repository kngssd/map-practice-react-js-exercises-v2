import { useMovieGenerator } from "./useMovieGenerator";

export default function MapPractice2() {
    const [movies, regenerate] = useMovieGenerator();
    console.log("movies", movies);

    const displayMovie = movies.map(movie => {
        return (
        <div key={movie.title} className="movie">
        <h2>{movie.title}</h2>
        <p>Star: {movie.star}</p>
        <p>Genre: {movie.genre}</p>
        <blockquote>{movie.quote}</blockquote>
        </div>)}
)

        return (
            <div className="mapPractice">
                <h2>Dana&apos;s Random Movies</h2>
                <button onClick={regenerate}>Click me to see a different list</button>
                <div className="movieList">
                    {displayMovie}
                </div>
            </div>);
}