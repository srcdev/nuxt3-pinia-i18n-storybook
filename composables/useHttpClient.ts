import axios from "axios";
const runtimeConfig = useRuntimeConfig();
const baseUrl = runtimeConfig.public.apiBase;

const useHttpClient = () => {
  const httpOptions = {
    baseURL: baseUrl,
    headers: {
      "Content-type": "application/json",
    },
  };
  return axios.create(httpOptions);
};
export default useHttpClient();
