import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { User } from '../user';
import {map, catchError} from "rxjs/operators";
import {throwError} from "rxjs";



@Injectable()
//@Injectable({ providedIn: 'root',})
export class UserService {
  private baseUrl: string = 'http://localhost:8080/api';
  private headers = new Headers({'Content-Type' : 'application/json'});
  private options = new RequestOptions({headers:this.headers});
  constructor(private _http: Http){
    
  }
  getUsers(){
    return this._http.get(this.baseUrl+'/users', this.options)
    .pipe(
      map((response:Response)=> response.json()),
      catchError((response:Response)=> throwError(response))
    );
  
  }
getUser(id:Number){
    return this._http.get(this.baseUrl+'/users/'+id, this.options)
    .pipe(
       map((response: Response) => response.json()),
      catchError((response: Response) => throwError(response)));
  }
  deleteUser(id:Number){
    return this._http.delete(this.baseUrl+'/user/'+id, this.options)
    .pipe(
      map((response: Response) => response.json()),
      catchError((response: Response) => throwError(response)));

  }
  createUser(user:User){
    return this._http.post(this.baseUrl+'/user',JSON.stringify(user), this.options)
    .pipe(
      map((response: Response) => response.json()),
      catchError((response: Response) => throwError(response)));
  }
  updateUser(user:User){
    return this._http.put(this.baseUrl+'/user',JSON.stringify(user), this.options)
    .pipe(
      map((response: Response) => response.json()),
      catchError((response: Response) => throwError(response)));
  }
    //errorHandle(error:Response){
    //  return Observable.throw(error||"SERVE ERROR");
    //}
}
