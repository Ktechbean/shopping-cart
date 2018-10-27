import { Component, OnInit, Input } from '@angular/core';
import {Student} from '../student';
import { Courses } from "../courses";
import {StudentService} from '../editmethod.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent  {
  stdarr:Student[];
  newstd:Student=new Student();
  changeindex:number;
  @Input()
  deleteid:number;
  constructor(private editmethodService: StudentService)
 {
    this.stdarr=editmethodService.getall();
  }
 
  
  deletestud():void
  {
    alert("sure to delete");
    this.editmethodService.delete(this.deleteid);
    
    // for(let i=0;i<this.stdarr.length;i++)
    // {
    //   if(this.deleteid==this.stdarr[i].id)
    //   {
    //    // this.stdarr.splice(i,1);
    //     this.editmethodService.storestdarr.splice(i,1);
    //   }
    // }
  } 

}
