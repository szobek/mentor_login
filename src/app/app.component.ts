import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  themes:Array<Theme>=[{name:"indigo", value:""},{name:"deeppurple", value:""},{name:"pink", value:""},{name:"purple", value:""},]
  constructor(@Inject(DOCUMENT) private document: Document) {

    this.changeTheme()
  }
  selectedValue!: string;

  submit() {
    if (this.form.valid) {
      console.log(`name: ${this.form.value.username};psw: ${this.form.value.password}`);
      
    }
  }

  
  foods: Food[] = [
    {value: 'hortobagyi', viewValue: 'Hortobágyi Palacsinta'},
    {value: 'pizza', viewValue: 'Pizza'},
    {value: 'hamburger', viewValue: 'Hamburger'},
  ];

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  changeTheme(){

  }
  
}


interface Food {
  value: string;
  viewValue: string;
}
interface Theme{
  name:string
  value:string
}