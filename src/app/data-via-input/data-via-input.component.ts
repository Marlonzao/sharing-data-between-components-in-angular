import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-data-via-input',
  templateUrl: './data-via-input.component.html',
  styleUrls: ['./data-via-input.component.css']
})
export class DataViaInputComponent implements OnInit {

  parentMessage = 'Mensagem Teste';

  contactForm: FormGroup = new FormGroup({
    firstname: new FormControl()
  })

  constructor() { }

  ngOnInit(): void {
    this.contactForm.get("firstname").valueChanges.subscribe(x => {
      console.log('firstname value changed')
      console.log(x)
    })
  }

}
