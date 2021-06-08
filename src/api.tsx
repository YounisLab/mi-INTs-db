import axios from "axios";
import qs from "qs";

const apiURL = "http://localhost:8000";

export const getGeneData = (gene: string, columns: object | null = null) => {
  return axios.get(apiURL, {
    params: { gene, ...(columns && { columns }) },
    paramsSerializer: function (params) {
      return qs.stringify(params, { arrayFormat: "repeat" });
    },
  });
};
