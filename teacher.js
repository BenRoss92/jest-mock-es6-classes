// teacher to ask if present
// take register

export function Teacher(person) {
    this.person = person;
}

Teacher.prototype.askIfPresent = function() {
    this.person.sayName();
}