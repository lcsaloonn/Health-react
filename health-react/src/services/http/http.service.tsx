import axios, { Axios } from "axios";

export class HttpService {
  axiosClient: Axios;
  constructor() {
    this.axiosClient = axios.create({
      baseURL: "http://localhost:3001",
      timeout: 1000,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  }
}
