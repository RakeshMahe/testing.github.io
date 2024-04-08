import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class Api {

  constructor(public http: HttpClient) {

  }

  protected getBaseUrl(): string {
    return environment.baseUrl;
  }

}
