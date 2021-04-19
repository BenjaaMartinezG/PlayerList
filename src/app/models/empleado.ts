export class Empleado{
    id: number;
    name: string;
    position: string;
    rol: string;
    salary: number;

    constructor(id:number, name:string, position:string, rol:string, salary:number){
        this.id= id
        this.name = name
        this.position = position
        this.rol = rol
        this.salary = salary
    }

}
