import axios from "axios";

export default axios.create({
    baseURL: "https://api.edamam.com/api/recipes/v2",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
    },
    params: {
        app_id: "f4c9f945",
        app_key: "25e8fbf2f4ed8ecf7d6501c89e478c15",
        type: "public",
    },
});
