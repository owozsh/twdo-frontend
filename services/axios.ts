import axios, { AxiosRequestHeaders, HeadersDefaults } from "axios";
import { parseCookies } from "nookies";

export function getAPIClient(ctx?: any) {
  const { "twdo.token": token } = parseCookies(ctx);

  const api = axios.create({
    baseURL: "http://ec2-54-85-186-11.compute-1.amazonaws.com:4001",
  });

  if (token) {
    api.defaults.headers.common = {
      Authorization: `Bearer ${token}`,
    } as AxiosRequestHeaders;
  }

  return api;
}
