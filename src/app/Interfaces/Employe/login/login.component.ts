import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeServiceService } from 'src/app/Services/employe-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private activatedRoute: ActivatedRoute,public service: EmployeServiceService ,public formBuilder: FormBuilder,public router: Router ){}
  loginF!: FormGroup;
  

  login(){

  const emailControl = this.loginF.get('email');
  const passwordControl = this.loginF.get('password');
  if (emailControl && passwordControl) {
    const email = emailControl.value!;
    const password = passwordControl.value!;


    this.service.login(email, password).subscribe(
      data => {
        console.log(data);
        if(data.user.role=="employe"){
          this.router.navigate(['/homeEmploye',data.user.id]);
        }
        else {
          alert("tu n'as pas l'autorisation ");
        }
        
      }
    );
  }
  }

  ngOnInit() {
    this.loginF = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
  }
);
}
}
