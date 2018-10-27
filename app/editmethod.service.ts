import { Injectable } from '@angular/core';
import {Student} from './student';
import { Courses } from "./courses";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  storestdarr:Student[]=[];
 

  constructor() 
  { 

    this.storestdarr.push({name:"Anupama",id:1,email:"anupama@gmail.com",mobnumber:9870998909,gender:"female",country:"India",coursearr:[{crname:"html",checked:true},{crname:"CSS",checked:false},{crname:"JS",checked:false},{crname:"Angular5",checked:true},{crname:"JAVA",checked:true},{crname:"PHP",checked:false},{crname:"C#",checked:false}]});
    this.storestdarr.push({name:"Anamika",id:2,email:"anamika@gmail.com",mobnumber:9500367101,gender:"female",country:"India",coursearr:[{crname:"html",checked:false},{crname:"CSS",checked:false},{crname:"JS",checked:false},{crname:"Angular5",checked:false},{crname:"JAVA",checked:false},{crname:"PHP",checked:true},{crname:"C#",checked:false}]});
    this.storestdarr.push({name:"Veera",id:3,email:"Veera@gmail.com",mobnumber:7078960651,gender:"female",country:"India",coursearr:[{crname:"html",checked:false},{crname:"CSS",checked:false},{crname:"JS",checked:false},{crname:"Angular5",checked:true},{crname:"JAVA",checked:false},{crname:"PHP",checked:true},{crname:"C#",checked:false}]});
    this.storestdarr.push({name:"Kimaya",id:4,email:"kimaya@gmail.com",mobnumber:989785432,gender:"female",country:"India",coursearr:[{crname:"html",checked:false},{crname:"CSS",checked:false},{crname:"JS",checked:false},{crname:"Angular5",checked:false},{crname:"JAVA",checked:false},{crname:"PHP",checked:false},{crname:"C#",checked:true}]});    

  }

  add(st:Student):void
  {
    this.storestdarr.push(st);
    console.log(this.storestdarr);
  }

  get(id:number):Student
  {
    for(let i=0;i<this.storestdarr.length;i++)
   {
    if(id==this.storestdarr[i].id)
     {
       this.display(i);
    
       return this.storestdarr[i];  
     }
    }
  }

 display(i:number)
{
  console.log(" student of id" +[i]+":");
  console.log(this.storestdarr[i].id);
  console.log(this.storestdarr[i].name);
  console.log(this.storestdarr[i].email);
  console.log(this.storestdarr[i].mobnumber);
}

 delete(id:number)
 {
  for(let i=0;i<this.storestdarr.length;i++)
  {
     if(id==this.storestdarr[i].id)
   {
      this.storestdarr.splice(i,1);
      this.display(i);
      break;
   }
  }
}

edit(id:number)
 { 
    for(let i=0;i<this.storestdarr.length;i++)
   {
     if(id==this.storestdarr[i].id)
     {
       this.storestdarr[i].id=2;
       this.storestdarr[i].name="Anu";
       this.storestdarr[i].email="anu@gm.com";
       this.storestdarr[i].gender="female";
       this.storestdarr[i].country="Japan";
       this.storestdarr[i].coursearr=[{crname:"html",checked:false},{crname:"CSS",checked:true},{crname:"JS",checked:false},{crname:"Angular5",checked:false},{crname:"JAVA",checked:true},{crname:"PHP",checked:false},{crname:"C#",checked:false}];
       this.display(i);
      } 
    }
  }
  getall():Student[]
   {
     return this.storestdarr; 
   }
  
}
