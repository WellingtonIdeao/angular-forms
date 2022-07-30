import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {}

  onSubmit(form: NgForm): void {
    let dados = `Nome: ${form.value.nome} Telefone: ${form.value.telefone} Endereço: ${form.value.endereco}`;
    console.log(dados);
  }

}
