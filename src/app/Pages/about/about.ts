import { Component } from '@angular/core';
import { Button } from '../../components/button/button';
import { FormsModule } from '@angular/forms';
import { Footer } from '../../components/footer/footer';

@Component({
  imports: [Button, FormsModule, Footer],
  selector: 'app-about',
  styleUrl: './about.css',
  templateUrl: './about.html',
})
export class About {
  FullName = "";
  Age = "";
  MobileNumber = "";
  Email = "";
  DoB = "";

  btnTexts = "Submit"

  submitFn(){
    const texts = this.FullName + " " + this.Age + " " + this.MobileNumber + " " + this.Email + " " + this.DoB;
    alert(texts);

    this.FullName = "";
    this.Age = "";
    this.MobileNumber = "";
    this.Email = "";
    this.DoB = "";
     
  }
}
