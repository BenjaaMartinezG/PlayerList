import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-count-empleados',
  templateUrl: './count-empleados.component.html',
  styleUrls: ['./count-empleados.component.css']
})
export class CountEmpleadosComponent implements OnInit {

  radioSelector ='Todos'

  //con el  @Input los datos fluyen del componente padre al componente hijo
  @Input() id: number;
  @Input() delantero: number;
  @Input() medio: number;
  @Input() arquero: number;

  //con el @output los datos fluyen del componente hijo al componente padre
  @Output() contRadioButtonChange = new EventEmitter<string>()

  constructor() {
    this.id = 0
    this.delantero = 0
    this.medio = 0
    this.arquero = 0
  }

  ngOnInit(): void {
  }

  radioChange() {
    this.contRadioButtonChange.emit(this.radioSelector)
  }

}
