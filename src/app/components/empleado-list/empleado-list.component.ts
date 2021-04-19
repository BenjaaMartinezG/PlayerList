import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {

  listEmpleado: Empleado[] = [{
    id: 1,
    name: 'Ocean',
    position: 'Medio',
    rol: 'El que siempre tiene lag',
    salary: 45000
  },
  {
    id: 2,
    name: 'Pelela',
    position: 'Delantero',
    rol: 'El que juega cuando quiere',
    salary: 50000
  },{
    id: 3,
    name: 'Lucky',
    position: 'Delantero',
    rol: 'Goleador volado',
    salary: 43000
  },{
    id: 4,
    name: 'Good',
    position: 'Medio',
    rol: 'Volado de buena pegada',
    salary: 43000
  },{
    id: 5,
    name: 'Malkavian',
    position: 'Arquero',
    rol: 'leyenda de hax',
    salary: 42000
  },{
    id: 6,
    name: 'Retoriko',
    position: 'Delantero',
    rol: 'joven promesa sub 14',
    salary: 35000
  },{
    id: 7,
    name: 'TxTx',
    position: 'Arquero',
    rol: 'El choro que no llega a los amis',
    salary: 32000
  },{
    id: 8,
    name: 'Pipino',
    position: 'Arquero',
    rol: 'Futura promesa Q.E.P.D',
    salary: 25000
  }
]

  radioSelector = 'Todos'

  constructor() { }

  ngOnInit(): void {
  }

  totalEmpleados(): number {
    return this.listEmpleado.length
  }
  totalDel(): number {
    return this.listEmpleado.filter(list => list.position === 'Delantero').length
  }

  totalMed(): number {
    return this.listEmpleado.filter(list => list.position === 'Medio').length
  }

  totalArq(): number {
    return this.listEmpleado.filter(list => list.position === 'Arquero').length
  }

  jugadoresButtonChange(radioButtonSelect: string){
    this.radioSelector = radioButtonSelect;
  }
}
