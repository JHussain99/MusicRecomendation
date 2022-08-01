import React, { useState, useEffect } from 'react';

const Question2 = () => {
    const [albumImageUrl, setalbumImageUrl] = useState();
    const [category, setCategory] = useState({ title: 'default title' });
    const [answer, setAnswer] = useState();
    const [showAnswer, setShowAnswer] = useState(false);

    useEffect(() => {
        axios({
            url: 'http://localhost:5080/Spotify',
            method: 'GET',
        }).then((result) => {
            setalbumImageUrl(result[0].albumImageUrl);
            setAnswer(result[0].answer);
            setCategory(result[0].category);
        });
    }, []);

    return ( <
        div >
        <
        div > Category: { category.title } < /div> <
        div > Question: { question } < /div> <
        div > Answer: { showAnswer ? answer : null } < /div> <
        div >
        <
        button onClick = {
            () => setShowAnswer(true) } > Reveal Answer < /button> <
        /div> <
        /div>
    );
};

export default Question2;