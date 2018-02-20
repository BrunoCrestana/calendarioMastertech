import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private roteador:Router) { }

  ngOnInit() {
  }
  avancar(){
  this.roteador.navigate(['/todo']);
  //console.log("Muda de página");
  }
}
