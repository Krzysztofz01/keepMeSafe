import { Injectable } from '@angular/core';
import { ICheckResults } from '../models/ICheckResults';

@Injectable({
  providedIn: 'root'
})
export class PasswordCheckerService {

  constructor() { }

  Check = (password: string) : ICheckResults => {
    const checkObject: ICheckResults = {
      length: false,
      digits: false,
      chars: false,
      case: false,
      special: false
    }
    
    if(this.CheckLength(password)) checkObject.length = true;
    if(this.CheckAnyDigits(password)) checkObject.digits = true;
    if(this.CheckSpecialChar(password)) checkObject.special = true;
    if(this.CheckAnyChars(password)) {
      checkObject.chars = true;
      if(this.CheckCase(password)) checkObject.case = true;
    }
    
    return checkObject;
  }

  private CheckLength = (password: string) : boolean => {
    if(password.length < 15) return false;
    return true
  }

  private CheckCase = (password: string) : boolean => {
    const lowercase: RegExp = /.*[a-z]+.*/;
    const uppercase: RegExp = /.*[A-Z]+.*/;

    if(lowercase.test(password) && uppercase.test(password)) return true;
    return false;
  }

  private CheckSpecialChar = (password: string) : boolean => {
    const specialChar: RegExp = /.*[!@#$%^&*£-]+.*/;

    if(specialChar.test(password)) return true;
    return false;
  }

  private CheckAnyDigits = (password: string) : boolean => {
    const digits: RegExp = /.*[0-9]+.*/;

    if(digits.test(password)) return true;
    return false;
  }

  private CheckAnyChars = (password: string) : boolean => {
    const chars: RegExp = /.*[a-z]+|[A-Z]+.*/;

    if(chars.test(password)) return true;
    return false;
  }
}
