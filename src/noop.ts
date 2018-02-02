export class Noop {

  public hello: string = "Hello";
  public world: string = "World";

  public hi() {
    return `${this.hello} ${this.world}`;
  }

}
