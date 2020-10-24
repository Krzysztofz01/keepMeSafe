import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PasswordGeneratorService } from '../services/password-generator.service';

@Component({
  selector: 'generate-pass',
  templateUrl: './generate-pass.component.html',
  styleUrls: ['./generate-pass.component.css']
})
export class GeneratePassComponent implements OnInit {
  passwordGenerateInput = new FormControl('');

  constructor(private passwordGeneratorService: PasswordGeneratorService) { }

  ngOnInit(): void { }

  public generatePassword = (): void => {
    this.passwordGenerateInput.setValue(this.passwordGeneratorService.Generate());
  }
}
