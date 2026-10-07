import axios from "axios";

const api_base_url = process.env.REACT_APP_API_BASE_URL;

export const company_login_api = async (company_key, data) => {
  return await axios.post(`${api_base_url}/company/login/${company_key}`, data);
};
