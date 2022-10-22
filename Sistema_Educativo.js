var Alumno = /** @class */ (function () {
    function Alumno(paramNombre, paramEdad, paramNotaEdFis, paramNotaQuimica, paramNotaMatematica) {
        this.nombre = paramNombre;
        this.edad = paramEdad;
        this.notaEdFis = paramNotaEdFis;
        this.notaQuimica = paramNotaQuimica;
        this.notaMatematica = paramNotaMatematica;
    }
    Alumno.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Alumno.prototype.getNombre = function () {
        return this.nombre;
    };
    Alumno.prototype.setEdad = function (edad) {
        this.edad = edad;
    };
    Alumno.prototype.getEdad = function () {
        return this.edad;
    };
    Alumno.prototype.setNotaEdFis = function (notaEdFis) {
        this.notaEdFis = notaEdFis;
    };
    Alumno.prototype.getNotaEdFis = function () {
        return this.notaEdFis;
    };
    Alumno.prototype.setNotaQuimica = function (notaQuimica) {
        this.notaQuimica = notaQuimica;
    };
    Alumno.prototype.getNotaQuimica = function () {
        return this.notaQuimica;
    };
    Alumno.prototype.setNotaMatematica = function (notaMatematica) {
        this.notaMatematica = notaMatematica;
    };
    Alumno.prototype.getNotaMatematica = function () {
        return this.notaMatematica;
    };
    Alumno.prototype.aprobadoDesaprobado = function () {
        if ((this.notaMatematica || this.notaEdFis || this.notaQuimica) < 7) {
            return "está desaprobadx";
        }
        else {
            (this.notaMatematica || this.notaEdFis || this.notaQuimica) > 7;
            return "está aprobadx";
        }
    };
    return Alumno;
}());
var Profesor = /** @class */ (function () {
    function Profesor(paramNombre, paramEdad, paramAlumnos) {
        this.nombre = paramNombre;
        this.edad = paramEdad;
        this.alumnos = paramAlumnos;
    }
    Profesor.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Profesor.prototype.getNombre = function () {
        return this.nombre;
    };
    return Profesor;
}());
var Escuela = /** @class */ (function () {
    function Escuela(paramAlumnos, paramProfesores) {
        this.alumnos = paramAlumnos;
        this.profesores = paramProfesores;
    }
    Escuela.prototype.setAlumnos = function (alumnos) {
        this.alumnos = alumnos;
    };
    Escuela.prototype.getAlumnos = function () {
        return this.alumnos;
    };
    Escuela.prototype.setProfesores = function (profesores) {
        this.profesores = profesores;
    };
    Escuela.prototype.getProfesores = function () {
        return this.profesores;
    };
    Escuela.prototype.matricularAlumno = function (alumno) {
        this.alumnos.push(alumno);
        console.log(alumno.getNombre(), " Alumno Matriculado.");
    };
    Escuela.prototype.expulsarAlumno = function (alumno) {
        for (var i = 0; i < this.alumnos.length; i++) {
            if (alumno.getNombre() === this.alumnos[i].getNombre()) {
                this.alumnos.splice(i, 1);
                console.log("El alumno ", alumno.getNombre(), " fue expulsado.");
            }
        }
    };
    Escuela.prototype.contratarProfesor = function (profesor) {
        this.profesores.push(profesor);
        console.log(profesor.getNombre(), " Contratado.");
    };
    Escuela.prototype.expulsarProfesor = function (profesor) {
        for (var i = 0; i < this.profesores.length; i++) {
            if (profesor.getNombre() === this.profesores[i].getNombre()) {
                this.profesores.splice(i, 1);
                console.log("El profesor ", profesor.getNombre(), " fue expulsado.");
            }
        }
    };
    return Escuela;
}());
var alumno1 = new Alumno("Lgante", 21, 5, 2, 4);
var alumno2 = new Alumno("Moria", 55, 8, 7, 9);
var alumno3 = new Alumno("Tinelli", 60, 2, 7, 5);
var alumno4 = new Alumno("Reina", 76, 9, 8, 9);
var alumno5 = new Alumno("Pachano", 82, 10, 2, 6);
var alumno6 = new Alumno("Pampita", 32, 3, 6, 4);
console.log("El alumno", alumno1.getNombre(), "de", alumno1.getEdad(), "años de edad", alumno1.aprobadoDesaprobado(), "con la nota", alumno1.getNotaQuimica(), alumno1);
console.log("La alumna", alumno2.getNombre(), "de", alumno2.getEdad(), "años de edad", alumno2.aprobadoDesaprobado(), "con la nota", alumno2.getNotaEdFis());
