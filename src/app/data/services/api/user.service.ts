import { Injectable } from '@angular/core';
import { ApliClass } from '@data/schema/ApliClass.class';
import { Observable, of } from 'rxjs';
import { ICardUser } from '@shared/components/cards/card-user/icard-user.metadata';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ApliClass {

  /**
   * Get all api users, 
   */
  getAllUsers(): Observable<{
    error: boolean,
    msg: string,
    data: ICardUser[]
  }> {
    const response = { error: false, msg: '', data: [] as ICardUser[] };
    return this.http.get<ICardUser[]>(this.url + 'users')
      .pipe(
        map(r => {
          response.data = r;
          r.map(i => {
            if (i.gender === '') {
              i.gender = 'S/N';
            } 
          })
          return response;
        }),
        catchError(() => of(response))
      );
  }

  /**
   * Get one user by id
   * @param id 
   */
  public getUserById(id: number): Observable<{
    error: boolean,
    msg: string,
    data: ICardUser[]
  }> {
    const response = { error: false, msg: '', data: [] as ICardUser[] };
    return this.http.get<ICardUser[]>(this.url + 'users/' + id)
      .pipe(
        map(r => {
          response.data = r;
          return response;
        }
        ),
        catchError(() => of(response))
      );
  }

}
