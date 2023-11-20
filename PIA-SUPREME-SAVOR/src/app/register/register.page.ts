import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../models/user';



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user: User = new User();

  constructor(
    private authScv: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async onRegister(){
    this.authScv.onRegister(this.user).then(user=>{
      if(user){
        console.log('Successfully created user!');
        this.router.navigate(['/productos']);
      }
    }).catch(error=>{
      console.log('Error al crear usuario!');
    })

  } 







}
