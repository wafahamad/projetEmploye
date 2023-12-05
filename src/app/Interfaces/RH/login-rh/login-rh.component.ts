import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeServiceService } from 'src/app/Services/employe-service.service';

@Component({
  selector: 'app-login-rh',
  templateUrl: './login-rh.component.html',
  styleUrls: ['./login-rh.component.css']
})
export class LoginRhComponent {
  constructor(private activatedRoute: ActivatedRoute,public service: EmployeServiceService ,public formBuilder: FormBuilder,public router: Router ){}
  loginRh!:FormGroup
  
  login(){

    const emailControl = this.loginRh.get('email');
    const passwordControl = this.loginRh.get('password');
    if (emailControl && passwordControl) {
      const email = emailControl.value!;
      const password = passwordControl.value!;
  
  
      this.service.login(email, password).subscribe(
        data => {
          console.log(data);
          if(data.user.role.toUpperCase()=="RH"){
          this.router.navigate(['/homeRh',data.user.id]);
        }
        else {
          alert("tu n'as pas l'autorisation ");
        }
      }
    
      );
    }
    }
    ngOnInit() {
      this.loginRh = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]]
    }
  );
  }
}
