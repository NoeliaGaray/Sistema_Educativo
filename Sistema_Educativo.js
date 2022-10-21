var Alumnos = /** @class */ (function () {
    function Alumnos(paramNombre, paramEdad, paramNotaEdFis, paramNotaQuimica, paramNotaMatematica) {
        this.nombre = paramNombre;
        this.edad = paramEdad;
        this.notaEdFis = paramNotaEdFis;
        this.notaQuimica = paramNotaQuimica;
        this.notaMatematica = paramNotaMatematica;
    }
    Alumnos.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Alumnos.prototype.getNombre = function () {
        return this.nombre;
    };
    Alumnos.prototype.setEdad = function (edad) {
        this.edad = edad;
    };
    Alumnos.prototype.getEdad = function () {
        return this.edad;
    };
    Alumnos.prototype.setNotaEdFis = function (notaEdFis) {
        this.notaEdFis = notaEdFis;
    };
    Alumnos.prototype.getNotaEdFis = function () {
        return this.notaEdFis;
    };
    Alumnos.prototype.setNotaQuimica = function (notaQuimica) {
        this.notaQuimica = notaQuimica;
    };
    Alumnos.prototype.getNotaQuimica = function () {
        return this.notaQuimica;
    };
    Alumnos.prototype.setNotaMatematica = function (notaMatematica) {
        this.notaMatematica = notaMatematica;
    };
    Alumnos.prototype.getNotaMatematica = function () {
        return this.notaMatematica;
    };
    Alumnos.prototype.AprobadoDesaprobado = function () {
        if ((this.notaMatematica || this.notaEdFis || this.notaQuimica) < 7) {
            return "está desaprobadx";
        }
        else {
            (this.notaMatematica || this.notaEdFis || this.notaQuimica) > 7;
            return "está aprobadx";
        }
    };
    return Alumnos;
}());
var Profesores = /** @class */ (function () {
    function Profesores() {
        this.NombresAlumnos = ["Lgante", "Tinelli", "Pachano", "Polino", "Flavio"];
        this.NombresAlumnas = ["Moria", "Reina", "Pampita", "Carmen", "Susana"];
    }
    return Profesores;
}());
var Escuela = /** @class */ (function () {
    function Escuela(paramAlumnos, paramProfesoresClases) {
        this.profesoresClases = ["prof. Ed.Fisica", "prof.Matematica", "prof.Quimica"];
        this.alumnos = paramAlumnos;
        this.profesoresClases = paramProfesoresClases;
    }
    Escuela.prototype.setAlumnos = function (alumnos) {
        this.alumnos = alumnos;
    };
    Escuela.prototype.getAlumnos = function () {
        return this.alumnos;
    };
    Escuela.prototype.setProfesoresClases = function (profesoresClases) {
        this.profesoresClases = profesoresClases;
    };
    Escuela.prototype.getProfesoresClases = function () {
        return this.profesoresClases;
    };
    Escuela.prototype.ContratarDespedir = function () {
    };
    Escuela.prototype.MatricularExpulsar = function () {
    };
    return Escuela;
}());
var alumno1 = new Alumnos("Lgante", 21, 5, 2, 4);
var alumno2 = new Alumnos("Moria", 55, 8, 7, 9);
var alumno3 = new Alumnos("Tinelli", 60, 2, 7, 5);
var alumno4 = new Alumnos("Reina", 76, 9, 8, 9);
var alumno5 = new Alumnos("Pachano", 82, 10, 2, 6);
var alumno6 = new Alumnos("Pampita", 32, 3, 6, 4);
console.log("El alumno", alumno1.getNombre(), "de", alumno1.getEdad(), "años de edad", alumno1.AprobadoDesaprobado(), "con la nota", alumno1.getNotaQuimica());
console.log("La alumna", alumno2.getNombre(), "de", alumno2.getEdad(), "años de edad", alumno2.AprobadoDesaprobado(), "con la nota", alumno2.getNotaEdFis());
