import { useState } from "react";
import { root_login_api } from "../apis/root_login_api";

const RootLogin = () => {
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
      const response = await root_login_api(form);

      console.log(response.data);

      localStorage.setItem("token", response.data.token);
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  return (
    <div>
      <h1>Root Login</h1>

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

export default RootLogin;
