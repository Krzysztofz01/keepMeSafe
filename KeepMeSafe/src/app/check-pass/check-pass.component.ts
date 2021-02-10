import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PasswordCheckerService } from '../services/password-checker.service';

@Component({
  selector: 'check-pass',
  templateUrl: './check-pass.component.html',
  styleUrls: ['./check-pass.component.css']
})
export class CheckPassComponent implements OnInit {
  private Alerts: any = {
    length: new Alert("You'r password length is too short", "danger"),
    digits: new Alert("You have no digits in your password!", "danger"),
    chars: new Alert("You have no alphanumeric characters in your password!", "danger"),
    case: new Alert("All letters in your password have the same case!", "danger"),
    special: new Alert("You have no special characters in your password!", "danger"),
    leak: new Alert("You'r password was leaked during a database leak!", "danger"),
    external: new Alert("The XYZ algorith says that your password is too weak!", "danger"),
    ok: new Alert("Your password is secure. Congratulations!", "success")
  }

  passwordCheckInput = new FormControl("");
  alertContainer: Alert[];

  constructor(private passwordCheckerService: PasswordCheckerService) { }

  ngOnInit(): void { }

  public Check(): void {
    this.alertContainer = [];
    const results = this.passwordCheckerService.Check(this.passwordCheckInput.value);

    if(!results.length) this.alertContainer.push(this.Alerts.length);
    if(!results.digits) this.alertContainer.push(this.Alerts.digits);
    if(!results.chars) {
      this.alertContainer.push(this.Alerts.chars);
    } else {
      if(!results.case) this.alertContainer.push(this.Alerts.case);
    }
    if(!results.special) this.alertContainer.push(this.Alerts.special);

    if(this.alertContainer.length == 0) this.alertContainer.push(this.Alerts.ok);
  }

  public clear(): void {
    this.passwordCheckInput.setValue("");
  }

}

class Alert {
  public message: string;
  public type: string;

  constructor(message: string, type: string) {
    this.message = message;
    this.type = type;
  }
}
