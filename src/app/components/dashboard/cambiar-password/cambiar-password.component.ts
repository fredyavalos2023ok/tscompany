import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cambiar-password',
  templateUrl: './cambiar-password.component.html',
  styleUrls: ['./cambiar-password.component.css']
})
export class CambiarPasswordComponent implements OnInit {
  cambiarPassword: FormGroup;
  loading = false;
  constructor(private fb: FormBuilder,
              private usuarioService: UsuarioService,
              private toastr: ToastrService,
              private router: Router) {
    this.cambiarPassword = this.fb.group({
      passwordAnterior: ['', Validators.required],
      nuevaPassword: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['']
    }, { validator: this.checkPassword})
  }

  ngOnInit(): void {
  }

  checkPassword(group: FormGroup): any {
    const pass = group.controls?.['nuevaPassword'].value;
    const confirmPass = group.controls?.['confirmPassword'].value;
    return pass === confirmPass ? null : { notSame: true };
  } 

  guardarPassword(): void {
    const changePassword: any = {
      passwordAnterior: this.cambiarPassword.value.passwordAnterior,
      nuevaPassword: this.cambiarPassword.value.nuevaPassword
    };
    console.log(changePassword);
    this.loading = true;
    this.usuarioService.changePassword(changePassword).subscribe(data => {
          this.toastr.info(data.message);
          this.router.navigate(['/dashboard']);
        }, error => {
          this.loading = false;
          this.cambiarPassword.reset();
          this.toastr.error(error.error.message, 'Error!');
        }
    );
  }
}







 /*** */ 
/* guardarPassword(): void {
    /*console.log(this.cambiarPassword);*/

/*    const changePassword: any = {
      passwordAnterior: this.cambiarPassword.value.passwordAnterior,
      nuevaPassword: this.cambiarPassword.value.nuevaPassword
    };
    console.log(changePassword);
  }  
  this.usuarioService.changePassword(changePassword).subscribe(data => {
    this.toastr.info(data.message);
    this.router.navigate(['/dashboard']);
}, error => {
  this.loading = false;
  this.cambiarPassword.reset();
  this.toastr.error(error.error.message, 'Error!');
});*/
/**** */
















/*
}

    /*this.loading = true;                
    this.usuarioService.changePassword(changePassword).subscribe(
          {
            next: data =>{       
              console.log(data);
              /*this.toastr.info(data.Message);*/
              /*this.router.navigate(['/dashboard']);*/
              /*this.loading = false;*/
    /*        },
            error: error => {              */
              /*this.loading = false;*/
          /*   console.log(error);        */
              /*this.cambiarPassword.reset();*/
              /*this.toastr.error(error.error.message, 'Error!');*/
         /*   }
        });    */
/*  }
}*/

/*
this.usuarioService.changePassword(changePassword).subscribe(
  {
    next: data =>{       
      console.log(data);
      /*this.toastr.info(data.Message);*/
      /*this.router.navigate(['/dashboard']);*/
      /*this.loading = false;*/
/*    },
    error: error => {
      /*this.loading = false;*/
 /*     console.log(error);                                         */
      /*this.cambiarPassword.reset();*/
      /*this.toastr.error(error.error.message, 'Error!');*/
   /* }
});  
*/

/*-----------------------------------------------------------------------------------------*/
/*import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-cambiar-password',
  templateUrl: './cambiar-password.component.html',
  styleUrls: ['./cambiar-password.component.css']
})
export class CambiarPasswordComponent implements OnInit {
  cambiarPassword: FormGroup;
  loading = false;
  changePassword$: Observable<any>;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.cambiarPassword = this.fb.group(
      {
        passwordAnterior: ['', Validators.required],
        nuevaPassword: ['', [Validators.required, Validators.minLength(4)]],
        confirmPassword: ['']
      },
      { validator: this.checkPassword }
    );

    this.changePassword$ = this.cambiarPassword.valueChanges.pipe(
      switchMap(changePassword => this.usuarioService.changePassword(changePassword))
    );
  }

  ngOnInit(): void {}

  checkPassword(group: FormGroup): any {
    const pass = group.controls?.['nuevaPassword'].value;
    const confirmPass = group.controls?.['confirmPassword'].value;
    return pass === confirmPass ? null : { notSame: true };
  }

  guardarPassword(): void {
    console.log(this.cambiarPassword.value);
    this.loading = true;
    this.changePassword$.subscribe(
      (data) => {
        this.toastr.info(data.message);
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        this.loading = false;
        this.cambiarPassword.reset();
        this.toastr.error(error.error.message, 'Error!');
      }
    );
  }
}*/







/*------------------------------------------------------------------------------------------------------ */
/*import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cambiar-password',
  templateUrl: './cambiar-password.component.html',
  styleUrls: ['./cambiar-password.component.css']
})
export class CambiarPasswordComponent implements OnInit {
  cambiarPassword: FormGroup;

  constructor(private fb: FormBuilder) {
    this.cambiarPassword = this.fb.group({
      passwordAnterior: ['', Validators.required],
      nuevaPassword: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['']
    }, { validator: this.checkPassword })
  }

  ngOnInit(): void {
  }

  checkPassword(group: FormGroup): any {
    const pass = group.controls?.['nuevaPassword']?.['value'];
    const confirmPass = group.controls?.['confirmPassword']?.['value'];
    return pass === confirmPass ? null : { notSame: true};
  }

  guardarPassword(): void {
    console.log(this.cambiarPassword)
  }

    const changePassword: any = {
      passwordAnterior: this.cambiarPassword.value.passwordAnterior,
      nuevaPassword: this.cambiarPassword.value.nuevaPassword
    };
    console.log(changePassword);
}/*

/*------------------------------------------------------------*/

/*import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cambiar-password',
  templateUrl: './cambiar-password.component.html',
  styleUrls: ['./cambiar-password.component.css']
})
export class CambiarPasswordComponent implements OnInit {
  cambiarPassword: FormGroup;
  loading = false;
  constructor(private fb: FormBuilder,
              private usuarioService: UsuarioService,
              private toastr: ToastrService,
              private router: Router) {
    /*this.cambiarPassword = this.fb.group({
      passwordAnterior: ['', Validators.required],
      nuevaPassword: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['']
    }, { validator: this.checkPassword })
  }*/

  /*this.cambiarPassword = this.fb.group({
    passwordAnterior: ['', Validators.required],
    nuevaPassword: ['', [Validators.required, Validators.minLength(4)]],
    confirmPassword: ['']
  }, { validator: (group: FormGroup) => this.checkPassword(group) });
  }

  ngOnInit(): void {
  }

  /*checkPassword(group: FormGroup): any {
    const pass = group.controls?.['nuevaPassword']?.['value'];
    const confirmPass = group.controls?.['confirmPassword']?.['value'];
    return pass === confirmPass ? null : { notSame: true};
  }*/

  /*checkPassword(group: FormGroup): any {
    const pass = group.controls['nuevaPassword'].value;
    const confirmPass = group.controls['confirmPassword'].value;
    return pass === confirmPass ? null : { notSame: true };
  }
  


  guardarPassword(): void {
    /*console.log(this.cambiarPassword);*/

    /*const changePassword: any = {
      passwordAnterior: this.cambiarPassword.value.passwordAnterior,
      nuevaPassword: this.cambiarPassword.value.nuevaPassword
    };
    console.log(changePassword);
    this.loading = true;
    this.usuarioService.changePassword(changePassword).subscribe(data => {
      this.toastr.info(data.message);
      this.router.navigate(['/dashboard']);
    }, error => {
      this.loading = false;
      this.cambiarPassword.reset();
      this.toastr.error(error.error.message, 'Error!');
    });
  }
}
*/
/*-------------------------------------------------------------------------------------------------------*/
