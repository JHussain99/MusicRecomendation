import axios from "axios";
import artist from "../NewFetch";

import baseUrl, { commonParams } from "./constants";

export const fetchEvents = (page = 1, artist) => {
        return axios.get(
                `${baseUrl}events.json?${commonParams}&sort=relevance,desc&page=${page}&size=10${
      keyword ? `&keyword=${artist}` : ""
    }`
  );
};

export default fetchEvents;