
function DetectDay(diaSemana) {
    const diasSemana = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
    const indiceDia = diasSemana.indexOf(diaSemana.toLowerCase());

    if (indiceDia === -1) {
        return 'Dia No Valido';
    }

    const hoy = new Date();
    const diaActual = hoy.getDay();
    const diferenciaDias =indiceDia - diaActual;

    const fechaDelDia = new Date();
    fechaDelDia.setDate(hoy.getDate() + diferenciaDias);

    const año = fechaDelDia.getFullYear();
    const mes = String(fechaDelDia.getMonth() + 1).padStart(2, '0');
    const dia = String(fechaDelDia.getDate()).padStart(2, '0');

    return `${año}-${mes}-${dia}`;

};

export default DetectDay;