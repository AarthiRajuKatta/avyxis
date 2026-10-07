import { useState } from "react";
import { useParams } from "react-router-dom";
import { company_login_api } from "../apis/company_login_api";

const CompanyLogin = () => {
  const { company_key } = useParams();

  const [form, set_form] = useState({
    email: "",
    password: "",
  });

  const handle_change = (e) => {
    set_form({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handle_login = async () => {
    try {
      const response = await company_login_api(company_key, form);

      console.log(response.data);

      localStorage.setItem("token", response.data.token);
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  return (
    <div>
      <h1>
        {company_key} Login
      </h1>

      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handle_change}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handle_change}
      />

      <button
        onClick={handle_login}
      >
        Login
      </button>
    </div>
  );
};

export default CompanyLogin;
