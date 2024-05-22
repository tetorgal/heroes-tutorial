import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  ejemplo: { id: string, name: string } = { id: "1", name: "tetor" };

  constructor() { }

  ngOnInit(): void {
    // Lógica de inicialización aquí
  }
}