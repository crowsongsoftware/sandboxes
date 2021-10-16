import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {shareReplay} from 'rxjs/operators';

// types
type Environment  = {
  resourceServerA: string; // DEVELOPMENT
  resourceServerB: string; // QA
  stage: string;           // STAGE
  production: string;      // PRODUCTION
};   

// constants
const BACKEND_URL: string = 'http://localhost:3000/configuration';
const ASSET_URL: string = "assets/config/configuration.json";

@Injectable({providedIn: 'root'})
export class ConfigurationService {
  private readonly CONFIGURATION_URL = ASSET_URL;
  private configuration$!: Observable<Environment>;

  constructor(private http: HttpClient) { };

  public loadConfigurations(): any {
    if (!this.configuration$) {
      this.configuration$ = this.http.get<Environment>(`${this.CONFIGURATION_URL}`).pipe(
        shareReplay(1)
      );
    };
    return this.configuration$;
  };
};
