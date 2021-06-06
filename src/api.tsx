import axios from "axios";

const apiURL = "http://localhost:8000";

export const getGeneData = (gene: string, columns: object | null = null) => {
  return axios.get(apiURL, {
    params: { gene, columns },
  });
};
