import { Component, OnInit } from '@angular/core';
import { RegistrationService } from './registration.service';
import { Registration } from '../Shared/Registration';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  RegBind: Registration = new Registration();
  Password: string;
  isTrue = false;
  isTrue1 = false;
  constructor(private regserve: RegistrationService) { }

  ngOnInit() {
  }
  Register(Reg: Registration) {
    this.regserve.Register(Reg).subscribe();
  }
  checkTrue(ev: Event) {
    if (ev.target )
    {
      this.isTrue = true;
    }
  }
}
