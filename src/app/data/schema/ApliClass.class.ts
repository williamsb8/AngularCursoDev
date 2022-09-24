import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { environment } from 'environments/environment';
import { of } from 'rxjs';

export class ApliClass {
    public url = environment.uri;
    public isPorduction = environment.production;
    public http: HttpClient;

    constructor() {
        this.http = inject(HttpClient)
    }

    error(error: HttpErrorResponse) {
        let errorMessage: string;
        if (error.error instanceof ErrorEvent) {
          errorMessage = error.error.message;
        }
        else {
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message} `;
        }
        return of( {error: true, msg: errorMessage, data: null} );
      }
}
