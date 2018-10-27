import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Registration } from '../Shared/Registration';
import { Host, Httpopt } from '../Shared/Setting';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private Http: HttpClient) { }

  Register(Obj: Registration) {
  //  Httpopt.headers = Httpopt.headers.set('Authorization', 'my-new-auth-token');
    return this.Http.post(Host + '/api/RegistrationApi/PostRegistration', Obj );
  }

}
