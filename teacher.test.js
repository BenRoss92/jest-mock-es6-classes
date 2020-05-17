import { Person } from "./person";
import { Teacher } from "./teacher";

describe('Teacher', () => {
    describe('askIfPresent', () => {
        test('should get the person to say their name', () => {
            // const person = new Person()
            const 
            const teacher = new Teacher(person);
            console.log(teacher);

            teacher.askIfPresent();

            expect(person).toBeInstanceOf(Person);

           // person.sayName should be called

           
           // return value of sayName should equal whatever the name is that was passed into Teacher constructor
        });
    });
});

/**
 * Try completing the following:
 * 
 * 1. Set up working tests for passing an instance of a class into another class's constructor
 * 2. Set up working tests for passing a class that has not been instantiated into another class's constructor - see if you can test that the class is instantiated in your tests
 */