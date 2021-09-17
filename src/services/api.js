import { CONFIG } from "../config";

class ApiService {
  getMessage() {
    return fetch(CONFIG.URL + "/").then((response) => response.json());
  }
  setMessage(data) {
    return fetch(CONFIG.URL + "/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: data }),
    }).then((response) => response.json());
  }
}

export default new ApiService();
