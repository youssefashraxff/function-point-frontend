import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { BaseHttp } from './BaseHttp';
import { appAPIs } from '../constants/appAPIs';

import { UfpRequest } from '../models/UfpRequest';
import { UfpResponse } from '../models/UfpResponse';
import { FpRequest } from '../models/FpRequest';
import { FpResponse } from '../models/FpResponse';
import { LocRequest } from '../models/LocRequest';
import { LocResponse } from '../models/LocResponse';
import { TcfAttributesRequest } from '../models/TcfAttributesRequest';

export interface Language {
  name: string;
  avc: number;
}

export interface TcfRequest {
  di: number;
}

export interface TcfResponse {
  di: number;
  tcf: number;
}

@Injectable({
  providedIn: 'root',
})
export class FunctionPointService extends BaseHttp {

  // Shared state across cards
  readonly ufpResult$ = new BehaviorSubject<number>(0);
  readonly tcfResult$ = new BehaviorSubject<number>(0);
  readonly fpResult$  = new BehaviorSubject<number>(0);

  calculateUFP(request: UfpRequest) {
    return this.post<UfpResponse>(appAPIs.calculateUFP, request);
  }

  calculateTCF_Di(request: TcfRequest): Observable<TcfResponse> {
    return this.post<TcfResponse>(appAPIs.calculateTCF, request);
  }
  calculateTCF_Attributes(request: TcfAttributesRequest): Observable<TcfResponse> {
    return this.post<TcfResponse>(appAPIs.calculateTCF, request);
  }
  calculateFP(request: FpRequest): Observable<FpResponse> {
    return this.post<FpResponse>(appAPIs.calculateFP, request);
  }

  calculateLOC(request: LocRequest): Observable<LocResponse> {
    return this.post<LocResponse>(appAPIs.calculateLOC, request);
  }

  getLanguages(): Observable<Record<string, number>> {
    return this.get<Record<string, number>>(appAPIs.getLanguages);
  }

  getGSCAttributes(): Observable<string[]> {
    return this.get<string[]>(appAPIs.getGSCAttributes);
  }
}
