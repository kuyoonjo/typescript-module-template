export class Greeter {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public greet(message: string): string {
    return `${message}, ${this.name}!`;
  }
}
