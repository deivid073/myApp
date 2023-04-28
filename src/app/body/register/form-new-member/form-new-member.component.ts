import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Check } from 'src/app/interfaces/check.interface';
import { RegisterService } from 'src/app/services/registerServices.service';

@Component({
  selector: 'app-form-new-member',
  templateUrl: './form-new-member.component.html',
  styleUrls: ['./form-new-member.component.css']
})
export class FormNewMemberComponent implements OnInit {
  //PWD
  hide = true;




  getErrorMessage() {
    if (this.RegisterForm.get('birthDate')?.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.RegisterForm.get('name')?.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.RegisterForm.get('email')?.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.RegisterForm.get('password')?.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.RegisterForm.get('gender')?.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.RegisterForm.get('address')?.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.RegisterForm.get('city')?.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.RegisterForm.get('nickname')?.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.RegisterForm.get('postalCode')?.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.RegisterForm.get('services')?.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.RegisterForm.get('email')?.hasError('email')) {
      return ('Not a valid email');
    }
    if (this.RegisterForm.get('birthDate')?.hasError('date')) {
      return ('Introduce a valid date')
    }
    return 'No errors found';
  }

  //CheckBoxes
  service: Check = {
    name: 'Todos',
    completed: false,
    color: 'primary',
    subtasks: [
      { name: 'Alimentacion', completed: false, color: 'primary' },
      { name: 'Rutina', completed: false, color: 'accent' },
      { name: 'Mentoria', completed: false, color: 'warn' },
    ],
  };
  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.service.subtasks != null && this.service.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.service.subtasks == null) {
      return false;
    }
    return this.service.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.service.subtasks == null) {
      return;
    }
    this.service.subtasks.forEach(t => (t.completed = completed));
  }

  getSelectedServices(): string {
    let selectedServices: string = '';
    if (this.service.subtasks) {
      for (let subtask of this.service.subtasks) {
        if (subtask.completed) {
          selectedServices += subtask.name + ', ';
        }
      }
      selectedServices = selectedServices.slice(0, -2);
    }
    return selectedServices;
  }

  datePipe: DatePipe = new DatePipe('en-US');
  getBirthDateFormatted() {
    const birthDate = this.RegisterForm.get('birthDate')?.value;
    console.log(birthDate)
    return this.datePipe.transform(birthDate, 'MM/dd/yyyy');
  }
  over16Filter = (d: Date | null): boolean => {
    const ageInMs = Date.now() - (d || new Date()).getTime();
    const ageInYears = ageInMs / (1000 * 60 * 60 * 24 * 365.25);
    return ageInYears >= 16;
  };
  over16Validator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const birthDate = control.value;
    const isOver16 = this.over16Filter(birthDate);
    return isOver16 ? null : { 'under16': true };
  };



  forbiddenNames = ['puta', 'maricon', 'xxx', 'sexo', 'drogas'];

  forbiddenNameValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const name = control.value;
    const isForbidden = this.forbiddenNames.includes(name);
    return isForbidden ? { 'forbiddenName': true } : null;
  }

  RegisterForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(60), this.forbiddenNameValidator]),
    birthDate: new FormControl('', [Validators.required, this.over16Validator]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(320)]),
    password: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    postalCode: new FormControl('', [Validators.required, Validators.maxLength(5)]),
    services: new FormControl('', [Validators.required]),
  });



  constructor(private registerService: RegisterService) { }



  ngOnInit(): void {

  }
  sendClient(data:any){
    this.registerService.PostProducts(data).subscribe(()=>{
      
    });
}

  public onSubmitRegister() {
    const selectedServices = this.getSelectedServices();
    const data = {
      name: this.RegisterForm.get('name')?.value,
      birthDate: this.RegisterForm.get('birthDate'),
      email: this.RegisterForm.get('email')?.value,
      password: this.RegisterForm.get('password')?.value,
      gender: this.RegisterForm.get('gender')?.value,
      address: this.RegisterForm.get('address')?.value,
      city: this.RegisterForm.get('city')?.value,
      state: this.RegisterForm.get('state')?.value,
      postalCode: this.RegisterForm.get('postalCode')?.value,
      services: selectedServices
    }
    this.sendClient(data);
    console.log(this.RegisterForm.valid); 
    console.log(this.RegisterForm.get('name')?.valid);
    console.log(this.RegisterForm.get('birthDate')?.valid);
    console.log(this.RegisterForm.get('email')?.valid);
    console.log(this.RegisterForm.get('password')?.valid);
    console.log(this.RegisterForm.get('gender')?.valid);
    console.log(this.RegisterForm.get('address')?.valid);
    console.log(this.RegisterForm.get('postalCode')?.valid);
    console.log(this.RegisterForm.get('services')?.valid);
    console.log(this.RegisterForm.get('state')?.valid);
    console.log(this.RegisterForm.get('city')?.valid);
    console.log(data);
  }

}

