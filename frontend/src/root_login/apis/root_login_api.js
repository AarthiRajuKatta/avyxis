import axios from "axios";

const api_base_url = process.env.REACT_APP_API_BASE_URL;

export const root_login_api = async (data) => {
  return await axios.post(`${api_base_url}/root/login`, data);
};
