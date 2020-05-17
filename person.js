// create a person class

// a person has a name

// a person can say their name

export function Person(name) {
    this._name = name;
}

Person.prototype.sayName = function() {
    return this._name;
}
