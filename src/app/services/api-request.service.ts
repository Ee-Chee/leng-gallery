import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { apiBaseUrl, apiKey } from '../constants/api-urls';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {
  headers = {
    apiKey: apiKey,
    Authorization: `Bearer ${apiKey}`,
  }

  constructor(private http: HttpClient) {}

  homeStartTracking(): void {
    this.http.post(`${apiBaseUrl}/test-start`, {}, {headers: this.headers}).pipe(
      take(1),
    ).subscribe();
  }

  homeEndTracking(): void {
    this.http.post(`${apiBaseUrl}/test-end`, {}, {headers: this.headers}).pipe(
      take(1),
    ).subscribe();
  }

  themeIconOpenedTracking(): void {
    this.http.post(`${apiBaseUrl}/test-open`, {}, {headers: this.headers}).pipe(
      take(1),
    ).subscribe();
  }
}
