import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';
import dotenv from 'dotenv';

@Injectable()
export class UserAccountService {
  constructor(private httpService: HttpService) {}

  getUserAccountDetails(userId: string) {
    return this.httpService
      .get(`http://localhost:${PORT}/user/${userId}`)
      .pipe(map((response) => response.data));
  }
}
