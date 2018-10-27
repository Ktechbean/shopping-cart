import { Component } from '@angular/core';
import {Student} from './student';
import { Courses } from './courses';
import {StudentService} from './editmethod.service';
import { empty } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class EditComponent {
  title:string = 'editstudform';
  stdarr:Student[];
  newstd:Student=new Student();
  changeindex:number;
EDIT:boolean;
  
constructor(private editmethodService: StudentService)
{
  this.stdarr=editmethodService.getall();
  
  // this.stdarr[0]=new Student();
  // this.stdarr[1]=new Student();
  // this.stdarr[2]=new Student();
  // this.stdarr[3]=new Student();

 // this.stdarr[0]={name:"Anupama",id:1,email:"anupama@gmail.com",mobnumber:9870998909,gender:"female",country:"India",coursearr:[{crname:"html",checked:true},{crname:"CSS",checked:false},{crname:"JS",checked:false},{crname:"Angular5",checked:true},{crname:"JAVA",checked:true},{crname:"PHP",checked:false},{crname:"C#",checked:false}]};
 // this.stdarr[1]={name:"Anamika",id:2,email:"anamika@gmail.com",mobnumber:9500367101,gender:"female",country:"India",coursearr:[{crname:"html",checked:false},{crname:"CSS",checked:false},{crname:"JS",checked:false},{crname:"Angular5",checked:false},{crname:"JAVA",checked:false},{crname:"PHP",checked:true},{crname:"C#",checked:false}]};
 // this.stdarr[2]={name:"Veera",id:3,email:"Veera@gmail.com",mobnumber:7078960651,gender:"female",country:"India",coursearr:[{crname:"html",checked:false},{crname:"CSS",checked:false},{crname:"JS",checked:false},{crname:"Angular5",checked:true},{crname:"JAVA",checked:false},{crname:"PHP",checked:true},{crname:"C#",checked:false}]};
 // this.stdarr[3]={name:"Kimaya",id:4,email:"kimaya@gmail.com",mobnumber:989785432,gender:"female",country:"India",coursearr:[{crname:"html",checked:false},{crname:"CSS",checked:false},{crname:"JS",checked:false},{crname:"Angular5",checked:false},{crname:"JAVA",checked:false},{crname:"PHP",checked:false},{crname:"C#",checked:true}]};    

}

editstud(st:number):void
{
   this.EDIT=true;
 let cnt= this.newstd.coursearr.length;
this.newstd.coursearr.splice(0,cnt);
for(let i=0;i<this.stdarr.length;i++)
{
  if(this.stdarr[i].id==st)
  {  this.changeindex=i;
    this.newstd.name=this.stdarr[i].name;
    this.newstd.id=this.stdarr[i].id;
    this.newstd.email=this.stdarr[i].email;
    this.newstd.mobnumber=this.stdarr[i].mobnumber;
    this.newstd.gender=this.stdarr[i].gender;
    this.newstd.country=this.stdarr[i].country;
    for(let j=0;j<=this.stdarr[i].coursearr.length-1;j++)
  {
    let c:Courses=new Courses();
    
    c.crname=this.stdarr[i].coursearr[j].crname;
    c.checked=this.stdarr[i].coursearr[j].checked;
    
      this.newstd.coursearr.push(c);
     
    }
  }
}
}

updateEmployee()
{
  
  console.log("is is",this.changeindex);
   let i=this.changeindex;
   
   console.log("stdaar-",this.stdarr[i]);
   console.log("stdaar-",this.newstd);
  this.stdarr[i].name=this.newstd.name;
  this.stdarr[i].id=this.newstd.id;
  this.stdarr[i].email=this.newstd.email;
  this.stdarr[i].mobnumber=this.newstd.mobnumber;
  this.stdarr[i].gender=this.newstd.gender;
  this.stdarr[i].country=this.newstd.country;
  let cnt=this.stdarr[i].coursearr.length;
  this.stdarr[i].coursearr.splice(0,cnt);
  console.log(this.stdarr[i].coursearr);
  alert("before");
  for(let j=0;j<this.newstd.coursearr.length;j++)
  {
    let c:Courses=new Courses();
    c.crname=this.newstd.coursearr[j].crname;
    c.checked=this.newstd.coursearr[j].checked;
    this.stdarr[i].coursearr.push(c);
  }

  this.Emptyfields();
}

Emptyfields()
{
  this.newstd.name="";
  this.newstd.id=undefined;
  this.newstd.email="";
  this.newstd.mobnumber=undefined;
  this.newstd.gender=undefined;
  this.newstd.country="";
  this.newstd.coursearr=[{crname:"html",checked:false},{crname:"CSS",checked:false},{crname:"JS",checked:false},{crname:"Angular5",checked:false},{crname:"JAVA",checked:false},{crname:"PHP",checked:false},{crname:"C#",checked:false}];    

}
 
}