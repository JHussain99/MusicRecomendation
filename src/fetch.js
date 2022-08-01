// import React from "react";
// import axios from "axios";

// export default class Player extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             albumImageUrl: [],
//             artist: [],
//             isPlaying: [],
//             trackUrl: [],
//             title: []
//         };
//     }
//     componentDidMount() {
//         axios({
//                 url: "http://localhost:5080/Spotify",
//                 method: "GET"
//             })
//             .then((result) => {
//                 this.setState({
//                     albumImageUrl: result.albumImageUrl,
//                     artist: result.artist,
//                     isPlaying: result.isPlaying,
//                     trackUrl: result.trackUrl,
//                     title: result.title
//                 });
//             });
//     }
//     render() {
//         const { albumImageUrl } = this.state;
//         const { artist } = this.state;
//         const { isPlaying } = this.state;
//         return ( <
//             div >
//             <
//             div > { albumImageUrl } <
//             /div> <
//             div > { artist } <
//             /div> <
//             div > { isPlaying } <
//             /div> <
//             div > { trackUrl } <
//             /div> <
//             div > { title } <
//             /div>

//             <
//             button type = "button"
//             onClick = {
//                 () => this.answer.setState(true) } > Reveal answer < /button> <
//             /div>
//         );
//     }
// }