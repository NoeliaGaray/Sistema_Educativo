class Alumno {
    private nombre: string;
    private edad: number;
    private notaEdFis: number;
    private notaQuimica: number;
    private notaMatematica: number;

    constructor(paramNombre: string, paramEdad: number, paramNotaEdFis: number, paramNotaQuimica: number, paramNotaMatematica: number) {
        this.nombre = paramNombre;
        this.edad = paramEdad;
        this.notaEdFis = paramNotaEdFis;
        this.notaQuimica = paramNotaQuimica;
        this.notaMatematica = paramNotaMatematica;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setEdad(edad: number): void {
        this.edad = edad;
    }

    public getEdad(): number {
        return this.edad;
    }

    public setNotaEdFis(notaEdFis: number): void {
        this.notaEdFis = notaEdFis;
    }

    public getNotaEdFis(): number {
        return this.notaEdFis;
    }

    public setNotaQuimica(notaQuimica: number): void {
        this.notaQuimica = notaQuimica;
    }

    public getNotaQuimica(): number {
        return this.notaQuimica;
    }

    public setNotaMatematica(notaMatematica: number): void {
        this.notaMatematica = notaMatematica;
    }

    public getNotaMatematica(): number {
        return this.notaMatematica;
    }

    public aprobadoDesaprobado(): string {
        if ((this.notaMatematica || this.notaEdFis || this.notaQuimica) < 7) {
            return "está desaprobadx";
        } else {
            (this.notaMatematica || this.notaEdFis || this.notaQuimica) > 7
            return "está aprobadx";
        }
    }

}

class Profesor {
    private nombre: string;
    private edad: number;
    private alumnos: Alumno[];

    constructor(paramNombre: string, paramEdad: number, paramAlumnos: Alumno[]) {
        this.nombre = paramNombre;
        this.edad = paramEdad;
        this.alumnos = paramAlumnos;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getNombre(): string {
        return this.nombre;
    }
}

class Escuela {
    private alumnos: Alumno[];
    private profesores: Profesor[];

    constructor(paramAlumnos: Alumno[], paramProfesores: Profesor[]) {
        this.alumnos = paramAlumnos;
        this.profesores = paramProfesores;
    }

    public setAlumnos(alumnos: Alumno[]) {
        this.alumnos = alumnos;
    }

    public getAlumnos(): Alumno[] {
        return this.alumnos;
    }

    public setProfesores(profesores: Profesor[]): void {
        this.profesores = profesores;
    }

    public getProfesores(): Profesor[] {
        return this.profesores;
    }

    public matricularAlumno(alumno: Alumno): void {
        this.alumnos.push(alumno);
        console.log(alumno.getNombre(), " Alumno Matriculado.");
    }

    public expulsarAlumno(alumno: Alumno): void {
        for (let i: number = 0; i < this.alumnos.length; i++) {
            if (alumno.getNombre() === this.alumnos[i].getNombre()) {
                this.alumnos.splice(i, 1);
                console.log("El alumno ", alumno.getNombre(), " fue expulsado.")
            }
        }
    }

    public contratarProfesor(profesor: Profesor): void {
        this.profesores.push(profesor);
        console.log(profesor.getNombre(), " Contratado.")
    }

    public expulsarProfesor(profesor: Profesor): void {
        for (let i: number = 0; i < this.profesores.length; i++) {
            if (profesor.getNombre() === this.profesores[i].getNombre()) {
                this.profesores.splice(i, 1);
                console.log("El profesor ", profesor.getNombre(), " fue expulsado.")
            }
        }
    }
}

let alumno1: Alumno = new Alumno("Lgante", 21, 5, 2, 4);
let alumno2: Alumno = new Alumno("Moria", 55, 8, 7, 9);
let alumno3: Alumno = new Alumno("Tinelli", 60, 2, 7, 5);
let alumno4: Alumno = new Alumno("Reina", 76, 9, 8, 9);
let alumno5: Alumno = new Alumno("Pachano", 82, 10, 2, 6);
let alumno6: Alumno = new Alumno("Pampita", 32, 3, 6, 4);

console.log("El alumno", alumno1.getNombre(), "de", alumno1.getEdad(), "años de edad", alumno1.aprobadoDesaprobado(), "con la nota", alumno1.getNotaQuimica(), alumno1);
console.log("La alumna", alumno2.getNombre(), "de", alumno2.getEdad(), "años de edad", alumno2.aprobadoDesaprobado(), "con la nota", alumno2.getNotaEdFis());
