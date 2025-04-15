import Axios from "axios";
import { BASE_URL } from "@config";
import { baseInterceptors } from "./axiosInterceptors";

export const baseInstance = Axios.create({
  baseURL: BASE_URL,
});

baseInterceptors(baseInstance);
