import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tutorial } from './model/tutorial/tutorial';

const baseUrl = "http://localhost:8080/api/tutorials"
@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Tutorial[]>{
    return this.http.get<Tutorial[]>(baseUrl);
  } 

  get(id: number): Observable<Tutorial>{
    console.log("Service id: ", id);
    //http://localhost:8080/api/tutorials/2
    return this.http.get<Tutorial>(`${baseUrl}/${id}`);
  }

  storeData(data: any): Observable<any>{
    return this.http.post(baseUrl, data);
  }

  deleteAll(): Observable<any>{
    return this.http.delete<any>(baseUrl);
  }

  deleteByID(id: any): Observable<any>{
    return this.http.delete(`${baseUrl}/${id}`);
  }

  update(id: any, data: any): Observable<any>{
    return this.http.put<any>(`${baseUrl}/${id}`, data);
  }

}
