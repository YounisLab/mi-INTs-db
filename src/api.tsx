import axios from "axios";
import qs from "qs";

const apiURL = "http://localhost:8000";

export const getGeneData = (gene: string, columns: Array<string> = []) => {
  return axios.get(apiURL, {
    params: { gene, ...(columns.length > 0 && { columns }) },
    paramsSerializer: function (params) {
      return qs.stringify(params, { arrayFormat: "repeat" });
    },
  });
};
