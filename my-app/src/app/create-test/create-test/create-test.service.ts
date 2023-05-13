import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVER_URL } from 'src/app/const/server-config';

@Injectable({
  providedIn: 'root',
})
export class CreateTestService {
  private readonly baseUrl = `${SERVER_URL}/api/helloworld`;

  constructor(private readonly http: HttpClient) {}

  public getHelloWorld(): Observable<string> {
    return this.http.get<string>(`${this.baseUrl}/get`);
  }

  public getHelloWorld2(): Observable<string> {
    return this.http.get<string>(`${this.baseUrl}/get2`);
  }
}
