import { toast } from "react-toastify";

export const Toast = (type, message = "Technical error occured") => {
  return void toast[type](message);
};
