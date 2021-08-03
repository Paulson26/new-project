import { Component, OnInit,Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../../_services/auth.service';




@Component({
  selector: 'app-newsidebar',
  templateUrl: './newsidebar.component.html',
  styleUrls: ['./newsidebar.component.css']
})
export class NewsidebarComponent implements OnInit {
  
  @Input() users:any;
  searching = false;
  focusOnList = true;

  

  usernameFilter:string="";
  UsersWithoutFilter:any=[];
  UserNameFilter: any;
  username: any;
  usernames: any;
  

  

  constructor(private service:AuthService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @Input() currentUser:any;
  
  
  // gOnInit(): void {
  //   this.refreshProfileList();
  // }
  ProfileList:any=[];

   refreshProfileList(){
     this.service.getallusers().subscribe((data: any)=>{
       this.users=data;
       
       
       
      
     });
  }


  FilterFn(){
    
    var UserNameFilter = this.UserNameFilter;
    

    this.users = this.users.filter(function (el:any){
          return el.username.toString().toLowerCase().includes(
          UserNameFilter.toString().trim().toLowerCase()
        )
      })
  }

}
