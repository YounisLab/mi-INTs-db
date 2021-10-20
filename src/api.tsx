import axios from "axios";
import qs from "qs";

const apiURL = "http://localhost:8000";

export const getGeneData = (gene: string, columns: Array<string> = []) => {
  return axios
    .get(`${apiURL}/gene`, {
      params: {
        gene: gene.toUpperCase(), // DB stores gene names in UPPERCASE
        ...(columns.length > 0 && { columns }),
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
