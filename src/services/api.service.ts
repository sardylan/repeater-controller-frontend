import axios, { Method } from "axios";

class ApiService {
  private _apiPrefix: string = "";

  get apiPrefix(): string {
    return this._apiPrefix;
  }

  set apiPrefix(value: string) {
    this._apiPrefix = value;
  }

  public async setRelay(outputNum: number, newStatus: boolean) {
    const requestBody = {
      outputNumber: outputNum,
      status: newStatus,
    };
    await this.call("POST", "/commands/outputs", requestBody);
  }

  private async call(method: Method, endpoint: string, requestBody: any) {
    const url: string = `${this._apiPrefix}${endpoint}`;

    const headers = {
      "Content-Type": "application/json",
    };

    return await axios.request({
      method: method,
      url: url,
      headers: headers,
      data: requestBody,
    });
  }
}

const apiService = new ApiService();
export default apiService;
