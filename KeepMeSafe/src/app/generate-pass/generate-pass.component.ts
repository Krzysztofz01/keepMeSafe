import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ClipboardService } from 'ngx-clipboard';
import { PasswordGeneratorService } from '../services/password-generator.service';

@Component({
  selector: 'generate-pass',
  templateUrl: './generate-pass.component.html',
  styleUrls: ['./generate-pass.component.css']
})
export class GeneratePassComponent {
  passwordGenerateInput = new FormControl('');
  private passwordValue: string = "";
  public valueCopied: boolean = false;

  constructor(private passwordGeneratorService: PasswordGeneratorService, private clipboardService: ClipboardService) { }

  public generatePassword(): void {
    this.passwordValue = this.passwordGeneratorService.Generate();
    this.passwordGenerateInput.setValue(this.passwordValue);
    this.valueCopied = false;
  }

  public copyToClipboard(): void {
    if(this.passwordValue.length > 0) {
      this.clipboardService.copy(this.passwordValue);
      this.valueCopied = true;
    }
  }
}
