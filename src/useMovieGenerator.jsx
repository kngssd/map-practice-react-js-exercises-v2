//You can ignore the contents of this file
import { shuffle } from "./randomUtils";
import { useState } from "react";
/**
 * @typedef {{title: string, star:string, genre: string, quote: string}} Movie
 */

/**
 * @type {Movie[]}
 */
const moviesData = [
    {
        title: "The Shawshank Redemption",
        star: "Tim Robbins",
        genre: "Drama",
        quote: "Get busy living or get busy dying.",
    },
    {
        title: "The Godfather",
        star: "Marlon Brando",
        genre: "Crime",
        quote: "I'm gonna make him an offer he can't refuse.",
    },
    {
        title: "The Dark Knight",
        star: "Christian Bale",
        genre: "Action",
        quote: "Why so serious?",
    },
    {
        title: "The Lord of the Rings: The Return of the King",
        star: "Elijah Wood",
        genre: "Fantasy",
        quote: "My precious.",
    },
    {
        title: "Pulp Fiction",
        star: "John Travolta",
        genre: "Crime",
        quote: "Do you know what they call a Quarter Pounder with Cheese in France?",
    },
    {
        title: "Inception",
        star: "Leonardo DiCaprio",
        genre: "Sci-Fi",
        quote: "Your mind is the scene of the crime.",
    },
    {
        title: "The Matrix",
        star: "Keanu Reeves",
        genre: "Sci-Fi",
        quote: "There is no spoon.",
    },
    {
        title: "Fight Club",
        star: "Brad Pitt",
        genre: "Drama",
        quote: "The first rule of Fight Club is: You do not talk about Fight Club.",
    },
    {
        title: "Forrest Gump",
        star: "Tom Hanks",
        genre: "Drama",
        quote: "Life is like a box of chocolates; you never know what you're gonna get.",
    },
    {
        title: "The Avengers",
        star: "Robert Downey Jr.",
        genre: "Action",
        quote: "I am Iron Man.",
    },
    {
        title: "The Lion King",
        star: "Matthew Broderick",
        genre: "Animation",
        quote: "Hakuna Matata!",
    },
    {
        title: "The Social Network",
        star: "Jesse Eisenberg",
        genre: "Drama",
        quote: "You don't get to 500 million friends without making a few enemies.",
    },
    {
        title: "Interstellar",
        star: "Matthew McConaughey",
        genre: "Sci-Fi",
        quote: "We used to look up at the sky and wonder at our place in the stars, now we just look down and worry about our place in the dirt.",
    },
];

/**
 * 
 * @returns {[Movie[], () => void]} Returns an array of 4 movie objects and a function to generate a new array of 4 movie objects
 
 */
export function useMovieGenerator() {
    const [chosen, setChosen] = useState(shuffle(moviesData).slice(0, 4));

    return [chosen, () => setChosen(shuffle(moviesData).slice(0, 4))];
}
