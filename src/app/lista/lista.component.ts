import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})

export class ListaComponent implements OnInit {
  tarefas = [{
    nome:"",
    feita:false
  }];
  constructor() { }

  
  ngOnInit() {
  }

  inserirTarefa(){
    this.tarefas.push({nome:"", feita: false});
  }

  removerTarefa(i){
    if(this.tarefas.length == 1){
      this.inserirTarefa();
    }
    this.tarefas.splice(i,1);
  }
}
