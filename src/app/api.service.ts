import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  name:string=""
  constructor(private http:HttpClient) { 
    this.name=""
  }
  
  fetchData=()=>{
    return this.http.get(environment.taskView)
  }
  searchedData=(name:any)=>{
    return this.http.get(environment.search+name)
  }
}
