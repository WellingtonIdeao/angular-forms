import { Component, OnInit } from '@angular/core';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  formCadastro: FormGroup;

  constructor() { 
    this.formCadastro = new FormGroup(
      {
        'nome': new FormControl(null, Validators.required),
        'telefone': new FormControl(null, Validators.required),
        'endereco': new FormControl(null, Validators.required)
      }
    );
  }

  ngOnInit(): void {}

  onSubmit():void{
    let dados = `Nome: ${this.formCadastro.value.nome} Telefone: ${this.formCadastro.value.telefone} Endereço: ${this.formCadastro.value.endereco}`;
    console.log(dados);
  }
}
