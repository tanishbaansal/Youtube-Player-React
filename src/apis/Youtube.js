import axios from "axios";

const KEY = "AIzaSyB_qRwP9y5QHFpuFaAzMZOcc_WIuunKM1E";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY,
    },
});
