export class FriendAge {
    nombre;
    año;
    mes;
    dia;
    constructor(nombre,año,mes,dia){
        this.nombre=nombre;
        this.año=año;
        this.mes=mes;
        this.dia=dia;
    }
    returnAge(){
        const date= new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear()-this.año;
        if(month>=this.mes){
            if(day>=this.dia){
              return year;
            }
         else {
            year-=1;
            return year;
            }
        }
        else {
            year-=1;
            return `${this.nombre} tiene ${year} hoy!`;
        }
    }
}
 const diego = new FriendAge(process.argv[3],process.argv[4],process.argv[5],process.argv[6]);
 console.log(diego.returnAge());