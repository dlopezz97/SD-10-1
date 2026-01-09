export class FriendNames {
  name1;
  name2;
  name3;  
  constructor(primero,segundo,tercero) {
      this.name1=primero;
      this.name2=segundo;
      this.name3=tercero
    }
  }

const nombres= new FriendNames(process.argv[3],process.argv[4],process.argv[5]);