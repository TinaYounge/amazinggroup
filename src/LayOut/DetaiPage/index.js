import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Style.css";
import Relate from "../../components/DetailComp/Relate";
import DetaiPage1 from "../../components/DetailPage1";

const baseUrl = process.env.REACT_APP_URL;
const API_KEY = process.env.REACT_APP_API_KEY;
const imgLink = process.env.REACT_APP_IMAGE;

const DetaiPage = () => {
  const [singleMovieData, setSingleMovieData] = useState([]);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const getMovie1 = async () => {
      try {
        let url = `https://api.themoviedb.org/3/movie/${id}?api_key=7b86993b7f0770e398a87a2da0766218&language=en-US`;
        let res = await fetch(url);
        let data = await res.json();
        setSingleMovieData(data);
        console.log("phimmoi", singleMovieData);
        // return singleMovieData;
      } catch (error) {
        console.log("erro", error.msg);
      }
    };
    getMovie1();
  }, [singleMovieData.id]);

  const [relatedMovieData, setRelatedMovieData] = useState([]);
  useEffect(() => {
    const getRelatedMovie = async () => {
      try {
        let url = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=7b86993b7f0770e398a87a2da0766218&language=en-US`;
        let res = await fetch(url);
        let data = await res.json();
        setRelatedMovieData(data);
        console.log("Relatedmovie", relatedMovieData);
        // return singleMovieData;
      } catch (error) {
        console.log("erro", error.msg);
      }
    };
    getRelatedMovie();
  }, [singleMovieData.id]);

  return (
    <>
      <DetaiPage1 movies={singleMovieData} />
      <br></br>
      <br></br>

      <Relate relatedMovie={relatedMovieData} />
    </>
  );
};

export default DetaiPage;
