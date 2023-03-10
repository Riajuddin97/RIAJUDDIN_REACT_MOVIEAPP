import React from "react";
import { useEffect, useState } from "react";
import IMovies from "../model/iMovies";
import { moviesInTheater } from "../services/movieInTheater";
import DisplayMovies from "./common/DisplayMovies";

const RunningMovies = () => {
    const [moviesList, setMoviesList] = useState<IMovies[]>([])
    useEffect(
        () => {
            const fetchList = async () => {
                moviesInTheater()
                    .then(data => setMoviesList(data))
                    .catch(error=> alert(error.message))                }

            fetchList()
        }, []
    )
    return (
      <DisplayMovies moviesList={moviesList}/>
    );
}

export default RunningMovies