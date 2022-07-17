import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IEmployee } from '../models/employee.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  baseUrl = "https://localhost:7186/api/Employee";

  constructor(private readonly _http: HttpClient) { }


  public findById(employeeId: string): Observable<IEmployee> {
    
    let params = new HttpParams().set("id", employeeId);

    return this._http.get<IEmployee>(`${this.baseUrl}/FindById`, { params }); 
  }

  public delete(employeeId: number): Observable<boolean> {
    let params = new HttpParams().set("id", employeeId);
    return this._http.delete(`${this.baseUrl}/Delete`, { params })
      .pipe(map((data: any) => {
        return data.data;
      }));
  }

  public findAll(): Observable<IEmployee[]> { 
    return this._http.get<IEmployee[]>(`${this.baseUrl}/FindAll`); 
  }

  public add(employee: IEmployee): Observable<any> { 
    return this._http.post<any>(`${this.baseUrl}/Add`, employee);
  }

  public update(employeeId: number, employee: IEmployee): Observable<any> {

    let params = new HttpParams().set("id", employeeId);

    return this._http.post<any>(`${this.baseUrl}/Update`, employee, { params });
     
  }
}
