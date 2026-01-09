export function ageCalculator(año,mes,dia,nombre) {
    //trayendo la fecha actual del sistema
    const date= new Date();
    //separando cada parte de las fechas para poder comparar
    let day = date.getDate();
    //este getter obtiene el mes entre 0-11, por eso hay que sumar 1
    let month = date.getMonth() + 1;
    let year = date.getFullYear()-año;
    if(month>=mes){
        if(day>=dia){
            console.log(`Tu edad es: ${year}`);
        }
        else {
            year-=1;
            console.log(`Tu edad es: ${year}`);
        }
    }
    else {
        year-=1;
        console.log(`Tu edad es: ${year}`);
    }
}
