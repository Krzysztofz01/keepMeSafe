import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordGeneratorService {
  private alphaCharsLowercase: string = "abcdefghijklmnopqrstuvwxyz";
  private alphaCharsUppercase: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  private digits: string = "0123456789";
  private special: string = '!@#$%^&*()';

  constructor() { }

  Generate = () : string => {
    let password: string = '';

    for(let i=0; i<5; i++) password = password.concat(this.alphaCharsLowercase.charAt(this.Random(this.alphaCharsLowercase.length)).toString()); 
    for(let i=0; i<5; i++) password = password.concat(this.alphaCharsUppercase.charAt(this.Random(this.alphaCharsUppercase.length)).toString());
    for(let i=0; i<5; i++) password = password.concat(this.digits.charAt(this.Random(this.digits.length)).toString());
    for(let i=0; i<3; i++) password = password.concat(this.special.charAt(this.Random(this.special.length)).toString());

    return this.Shuffle(password);
  }
  
  private Random = (max: number) : number => { return Math.floor(Math.random() * max); }

  private Shuffle = (a: string) : string => {
    let letterArray = a.split('');
    let length = a.length;

    for(let i=0; i<length-1; ++i) {
      let j = Math.floor(Math.random() * length);
      let temp = letterArray[i];
      letterArray[i] = letterArray[j];
      letterArray[j] = temp;
    }

    a = letterArray.join('');
    return a;
  }
}
