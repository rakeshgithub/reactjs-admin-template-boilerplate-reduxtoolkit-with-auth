import { createBrowserHistory } from "history";

export const history = createBrowserHistory();
export const getToken = () => {
  const userAuth = localStorage.getItem("user");

  const token = userAuth ? JSON.parse(userAuth).data?.token : "";

  return token;
};

export const currencyFormatter = (value, showSymbol = true, pre = true) => {
  let data = "";

  if (value) {
    data = Number(value)
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, "$&,");
    if (showSymbol) {
      data = pre ? `₹ ${data}` : `${data} ₹`;
    }
  }
  return data;
};
