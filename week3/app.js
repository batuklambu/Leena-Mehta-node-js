class Governor {
  constructor(name, age, party, state) {
    this.name = name;
    this.age = age;
    this.party = party;
    this.state = state;
  }
  static cause() {
    return `${this.name} from ${this.state} won the election on Women empower cause`;
  }

  static county() {
    return ["Allegheny", "Delaware", "Philadelphia"];
  }

  getmarginpct() {
    return `${this.name} age ${this.age} from ${this.party} won election with 56.50%`;
  }
}
const governorpa = new Governor("Josh Shapiro", 49, "Democrat", "Pennsylvania");

console.log(Governor.county()[1]);
console.log(Governor.cause());
console.log(governorpa.getmarginpct());
