import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';

  onChangeLength(value: string){
    const parsedValue = parseInt(value);

    if(!isNaN(parsedValue)){
      this.length = parsedValue;
    }

    console.log("Length is : " + this.length);
  }

  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
  }

  
  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick(){
    const allowedLetters = 'abcdefghijklmnopqrstuvwxyz';
    const allowedNumbers = '0123456789';
    const allowedSymbols = '~`! @#$%^&*()_-+={[}]|\:;"<,>.?/';

    let allowedPassword = ''

    if(this.includeLetters){
      allowedPassword += allowedLetters;
    }

    if(this.includeNumbers){
      allowedPassword += allowedNumbers;
    }

    if(this.includeSymbols){
      allowedPassword += allowedSymbols;
  }

  let generatedPassword = '';

  console.log(allowedPassword);

  for(let i = 0; i < this.length; i++){
    const index = Math.floor(Math.random() * allowedPassword.length);
    generatedPassword += allowedPassword[index];
    console.log(allowedPassword.length);
    console.log(allowedPassword[index]);
    console.log(generatedPassword);
  }

  
    this.password = generatedPassword;
    console.log(this.password);
  }


}
