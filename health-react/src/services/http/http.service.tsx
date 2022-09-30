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

  async get(path: string) {
    try {
      const response = await this.axiosClient.get(path);
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}
