import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Database } from '@app/interfaces/database';

@Injectable({
  providedIn: 'root'
})
export class HanaService {

  constructor(
    private http: HttpClient
  ) { }



  public export(connection: Database):any{
    const url = 'http://localhost:3000/export/';
    return this.http.post(url, connection);   
  }
  
}
