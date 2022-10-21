class Alumnos {
    
    private nombre: string;
    private edad: number;
    private notaEdFis: number;
    private notaQuimica: number;
    private notaMatematica: number;
    
    constructor(paramNombre: string, paramEdad: number, paramNotaEdFis: number,paramNotaQuimica: number,paramNotaMatematica: number){
        this.nombre = paramNombre;
        this.edad = paramEdad;
        this.notaEdFis = paramNotaEdFis;
        this.notaQuimica = paramNotaQuimica;
        this.notaMatematica = paramNotaMatematica;
    }
    
    public setNombre(nombre: string):void{
        this.nombre = nombre;
    }

    public getNombre():string{
        return this.nombre;
    }

    public setEdad(edad: number):void{
        this.edad = edad;
    }

    public getEdad():number{
        return this.edad;
    }

    public setNotaEdFis(notaEdFis: number):void{
        this.notaEdFis = notaEdFis;
    }

    public getNotaEdFis():number{
        return this.notaEdFis;
    }

    public setNotaQuimica(notaQuimica: number):void{
        this.notaQuimica = notaQuimica;
    }

    public getNotaQuimica():number{
        return this.notaQuimica;
    }

    public setNotaMatematica(notaMatematica: number):void{
        this.notaMatematica = notaMatematica;
    }

    public getNotaMatematica():number{
        return this.notaMatematica;
    }


    AprobadoDesaprobado():string {
        
        if ((this.notaMatematica || this.notaEdFis || this.notaQuimica)<7){
        return "está desaprobadx";
        }
        else{
            (this.notaMatematica || this.notaEdFis || this.notaQuimica)>7
        return "está aprobadx";
        }

    }

}

class Profesores{
    
    private NombresAlumnos: string[] = ["Lgante","Tinelli","Pachano","Polino","Flavio"];
    private NombresAlumnas: string[] = ["Moria","Reina","Pampita","Carmen","Susana"];
    
}

class Escuela {  
    
        private alumnos: Profesores[];
        private profesoresClases: string[] = ["prof. Ed.Fisica", "prof.Matematica", "prof.Quimica"];
    
    constructor(paramAlumnos: Profesores[], paramProfesoresClases: string[]){
        this.alumnos = paramAlumnos;
        this.profesoresClases = paramProfesoresClases;
    }

    public setAlumnos(alumnos: Profesores[]){
        this.alumnos = alumnos;
    }

    public getAlumnos(): Profesores[]{
        return this.alumnos;
    }

    public setProfesoresClases(profesoresClases: string[]):void{
        this.profesoresClases = profesoresClases;
    }

    public getProfesoresClases():string[]{
        return this.profesoresClases;
    }

    ContratarDespedir():void{   
        

    }

    MatricularExpulsar():void{          

    }
    
}

let alumno1: Alumnos = new Alumnos("Lgante", 21, 5,2,4);
let alumno2: Alumnos = new Alumnos("Moria", 55, 8,7,9);
let alumno3: Alumnos = new Alumnos("Tinelli", 60, 2,7,5);
let alumno4: Alumnos = new Alumnos("Reina", 76, 9,8,9);
let alumno5: Alumnos = new Alumnos("Pachano", 82, 10,2,6);
let alumno6: Alumnos = new Alumnos("Pampita", 32, 3,6,4);

console.log("El alumno", alumno1.getNombre(), "de", alumno1.getEdad(), "años de edad", alumno1.AprobadoDesaprobado(),"con la nota", alumno1.getNotaQuimica(), alumno1);
console.log("La alumna", alumno2.getNombre(), "de", alumno2.getEdad(), "años de edad", alumno2.AprobadoDesaprobado(),"con la nota", alumno2.getNotaEdFis());
