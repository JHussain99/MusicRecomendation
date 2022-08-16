import React, { useState, useEffect } from "react";
import axios from "axios";

const Player1 = () => {
  const [albumImageUrl, setalbumImageUrl] = useState("");
  const [artist, setartist] = useState("");
  const [isPlaying, setisPlaying] = useState();
  const [trackUrl, settrackUrl] = useState("");
  const [title, settitle] = useState("");

  const [category, setCategory] = useState({ title: "default title" });
  const [answer, setAnswer] = useState();
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    axios({
      url: "http://localhost:5080/Spotify",
      method: "GET",
    }).then((result) => {
      console.log(result);
      setalbumImageUrl(result?.data?.albumImageUrl); //Pushes picture to setalbumimageurl
      setartist(result?.data?.artist);
      setisPlaying(result?.data?.isPlaying);
      settrackUrl(result?.data?.trackUrl);
      settitle(result?.data?.title);

      //   setAnswer(result?.answer);
      //   setCategory(result?.category);
    });
  }, []);
  console.log(albumImageUrl); //check log
  console.log(artist); //check log
  console.log(isPlaying);
  console.log(trackUrl);
  console.log(title);

  return (
    <div>
      <img src={albumImageUrl}></img>

      <p>
        <ul>Song: {title}</ul>
        <ul>Artist: {artist} </ul>

        <ul> {isPlaying} </ul>
      </p>
      {/* <div> Question: {question} </div> */}
      <div> Answer: {showAnswer ? answer : null} </div>
      <div>
        <button onClick={() => setShowAnswer(true)}> Reveal Answer </button>
      </div>
    </div>
  );
};

export default Player1;
