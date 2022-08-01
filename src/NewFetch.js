import React, { useState, useEffect } from "react";
import axios from "axios";
const Question2 = () => {
  const [albumImageUrl, setalbumImageUrl] = useState("");
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

      //   setAnswer(result?.answer);
      //   setCategory(result?.category);
    });
  }, []);
  console.log(albumImageUrl);
  return (
    <div>
      <img src={albumImageUrl}></img>

      {/* <div> Question: {question} </div> */}
      <div> Answer: {showAnswer ? answer : null} </div>
      <div>
        <button onClick={() => setShowAnswer(true)}> Reveal Answer </button>
      </div>
    </div>
  );
};

export default Question2;
