"use strict";
describe('Array', function () {
    it('should same with javascript', function () {
        const names = ['alfin', 'sindi', 'jaki'];
        const values = [26, 3, 9];
        console.info(names);
        console.info(values);
    });
    it('should support readonly array', function () {
        const hobbies = ['Membaca', 'Berenang', 'Bermain'];
        console.info(hobbies);
    });
    it('should support tupple', function () {
        const person = ['Alfin', 'Sindi', 9];
        console.info(person);
        console.info(person[0]);
        console.info(person[1]);
        console.info(person[2]);
    });
});
