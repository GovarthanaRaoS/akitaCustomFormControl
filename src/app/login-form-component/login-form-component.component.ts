import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserQuery } from '../store/user.query';
import { UserStore } from '../store/user.store';
import { User } from '../user';

@Component({
  selector: 'app-login-form-component',
  templateUrl: './login-form-component.component.html',
  styleUrls: ['./login-form-component.component.css']
})
export class LoginFormComponentComponent implements OnInit{

  // public username$ = this.userQuery.getUsername();
  // public password$ = this.userQuery.getUsername();
  public showUserData : boolean = false;
  user : User = new User();

  constructor(private userQuery: UserQuery, private userStore: UserStore){

  }

  ngOnInit(): void {
    this.generateLoginForm();
  }

  public loginForm !: FormGroup;

  get nameField() : FormControl{
    return this.loginForm.get('name') as FormControl;
  }

  get passwordField() : FormControl{
    return this.loginForm.get('password') as FormControl;
  }

  public generateLoginForm() : void{

    this.loginForm = new FormGroup({

      name : new FormControl('',[Validators.required]),
      password : new FormControl('',[Validators.required])

    })

  }

  public submitLoginForm() : void{

    if(this.loginForm.valid){

      this.userStore.update({username:this.loginForm.value.name, password: this.loginForm.value.password});

      console.log(this.loginForm.value);
      this.user.username = this.loginForm.value.name;
      this.user.password = this.loginForm.value.password;
      this.userStore.update(this.user);
      
    }else{

      console.log('Invalid Form: ', this.loginForm.value);

    }

  }

  displayData(){

    this.showUserData = true;
    console.log('Username: ',this.userQuery.getUsername());
    console.log('Password: ',this.userQuery.getPassword());

  }

}