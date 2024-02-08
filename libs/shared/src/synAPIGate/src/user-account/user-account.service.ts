import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';
import dotenv from 'dotenv'

dotenv.config({ path: ENV_PATH });

const environment = process.env.ENVIRONMENT || 'development';
const serviceUrl = environment === 'production' ? process.env.PRODUCTION_SERVICE_URL : process.env.DEVELOPMENT_SERVICE_URL;
console.log(`Service URL for ${environment} environment is set to ${serviceUrl}`);

@Injectable()
export class UserAccountService {
  constructor(private httpService: HttpService) {}

  getUserAccountDetails(userId: string) {
    return this.httpService
      .get(`http://localhost:${PORT}/user/${userId}`)
      .pipe(map((response) => response.data));
  }
}
