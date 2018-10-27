import { Component, OnInit, Input } from '@angular/core';
import {Student} from '../student';
import { Courses } from '../courses';
import {StudentService} from '../editmethod.service';
import { empty } from 'rxjs';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent  {
  stdarr:Student[];
  @Input()
  newstd1:Student=new Student();
  changeindex:number;
  constructor(private editmethodService: StudentService) 
  {
    this.stdarr=editmethodService.getall();
    this.newstd1.coursearr=[{crname:"html",checked:false},{crname:"CSS",checked:false},{crname:"JS",checked:false},{crname:"Angular5",checked:false},{crname:"JAVA",checked:false},{crname:"PHP",checked:false},{crname:"C#",checked:false}];     
  }

    clear():void
    {
      this.Emptyfields();
    }

    save()
    {
      
      let s:Student = new Student();

    s.name=this.newstd1.name;
   s.id=this.newstd1.id;
   s.email=this.newstd1.email;
   s.mobnumber=this.newstd1.mobnumber;
   s.gender=this.newstd1.gender;
   s.country=this.newstd1.country;
    
   if(s.country==null)                    //form validation for combobox of select countries
   {
     alert("select country");
   }

   else{
  for(let i=0;i<this.newstd1.coursearr.length;i++)
  {
    let c:Courses=new Courses();
    c.crname=this.newstd1.coursearr[i].crname;
    c.checked=this.newstd1.coursearr[i].checked;
   
      s.coursearr.push(c);
     
    }
  
    this.stdarr.push(s);
    alert("saved");
    this.Emptyfields();
    //this.editmethodService.storestdarr.push(s);
  }
    }
  Emptyfields()
{
  this.newstd1.name="";
  this.newstd1.id=undefined;
  this.newstd1.email="";
  this.newstd1.mobnumber=undefined;
  this.newstd1.gender=undefined;
  this.newstd1.country="";
  this.newstd1.coursearr=[{crname:"html",checked:false},{crname:"CSS",checked:false},{crname:"JS",checked:false},{crname:"Angular5",checked:false},{crname:"JAVA",checked:false},{crname:"PHP",checked:false},{crname:"C#",checked:false}];    

}


  }


