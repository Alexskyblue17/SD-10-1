

export class FriendAge {
    constructor(n,y,m,d) {
      this.n=n;
      this.y=y;
      this.m=m;
      this.d=d;

      returnAge(){
        let today = new Date();
    let cumple = new Date(y, m, d);
    let edad = today.getFullYear() - cumple.getFullYear();
    let mes = today.getmes() - cumple.getMonth();

    if (cumple < 0x0 || 0x0 === cumple && today.getDate() < cumple.getDate()) {
      edad--;
    }
    return edad;
      }
      return `${this.n} is ${edad} today!`
}