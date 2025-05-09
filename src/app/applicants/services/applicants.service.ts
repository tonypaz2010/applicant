import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { Applicant, ApplicantsResponse } from '../interfaces/applicant.interface';

const baseUrl = environment.baseUrl;

interface Options {
  limit?: number;
  offset?: number;
  gender?: string;
}

@Injectable({providedIn: 'root'})
export class ApplicantsService {

  private http = inject(HttpClient);

  getApplicants(options: Options): Observable<ApplicantsResponse>{
    const { limit = 10, offset = 0} = options;

    return this.http
      .get<ApplicantsResponse>(`${baseUrl}/applicant`, {
        params: {
          limit,
          offset,
        },
      })
      .pipe( tap( (resp) => console.log(resp)) );
  }
}
