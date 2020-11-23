import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../../services/user_services/user.service";
import {User} from "../../../../models/user.model";
import {Skill} from "../../../../models/skill.model";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;
  skills: Skill[];
  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.loadprofile();
    this.loadSkillList();

  }
  loadSkillList(){
    this.service.getSkills().subscribe(data => {
      this.skills = data;
    });
  }
  loadprofile(){
    this.service.getUserDeatails().subscribe(data=>{
      this.user =  data;
    });
  }
  createskill(){

  }
  update() {
    let user1:User = {
      name: this.user.name,
      surname: this.user.surname,
      username: this.user.username,
      email: this.user.email,
      description: this.user.description,
      image: this.user.image,
      cellphone: this.user.cellphone
    };

    this.service.updateProfile(user1)
      .subscribe(
        success => alert("Done"),
        error => alert(error)
      );
  }
}
