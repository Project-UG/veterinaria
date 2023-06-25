import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form!:FormGroup;

  constructor(
    private authService:AuthService,
    private router : Router,
    private fb:FormBuilder
  ) { 
    this.form = this.fb.group({
      username : ['',Validators.required],
      password : ['',Validators.required]
    })
  }

  ngOnInit(): void {
   
  }

  login(){
    const response = this.authService.login(this.form.value);

    if(response.estado == 'error'){
      Swal.fire({
        title : 'Error',
        icon : 'error',
        text : response.mensaje
      });
      return;
    }

    this.router.navigateByUrl('app/main');
    this.form.reset();

  }

  registro(){
    this.router.navigateByUrl('auth/registro');
  }

}
