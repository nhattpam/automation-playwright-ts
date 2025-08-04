import { APIClient } from "../utils/apiClient";


export class AuthAPI {
  async login(email: string, password: string) {
    const client = await APIClient.createClient(process.env.BASE_URL_AUTH!);
    return client.post('/login', { data: { email, password } });
  }
}
