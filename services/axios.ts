import axios, { AxiosRequestHeaders, HeadersDefaults } from "axios";
import { parseCookies } from "nookies";

export function getAPIClient(ctx?: any) {
  const { "twdo.token": token } = parseCookies(ctx);

  const api = axios.create({
    baseURL: "https://ec2-3-84-11-182.compute-1.amazonaws.com:4001",
  });

  if (token) {
    api.defaults.headers.common = {
      Authorization: `Bearer ${token}`,
    } as AxiosRequestHeaders;
  }

  return api;
}
