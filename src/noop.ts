export class Noop {

  /**
   * First part of greeting message.
   * @type {string}
   */
  public hello: string = "Hello";

  /**
   * Second part of greeting message.
   * @type {string}
   */
  public world: string = "World";

  /**
   * Returns the greeting message.
   * @returns {string}
   */
  public hi() {
    return `${this.hello} ${this.world}`;
  }

}
