import axios from "axios";
import qs from "qs";

const apiURL = process.env.BACKEND_URL || "https://mi-ints-db-backend.herokuapp.com";

export const getGeneData = (gene: string, cols: Array<string> = []) => {
  return axios
    .get(`${apiURL}/gene`, {
      params: {
        gene: gene.toUpperCase(), // DB stores gene names in UPPERCASE
        ...(cols.length > 0 && { cols }),
      },
      paramsSerializer: function (params) {
        return qs.stringify(params, { arrayFormat: "repeat" });
      },
    })
    .then((resp) => {
      return resp.data[0];
    })
    .catch((err) => {
      console.error(err);
      return [];
    });
};
