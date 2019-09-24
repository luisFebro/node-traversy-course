//__dirname = C:\_github-projects\node-project-traversy-course
//__filename = C:\_github-projects\node-project-traversy-course\person.js
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`Hello ${this.name} with ${this.age}`);
    }
}

module.exports = Person;