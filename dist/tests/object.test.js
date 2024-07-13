"use strict";
describe('Object', function () {
    it('should support in typescript', function () {
        const person = {
            id: '1',
            name: 'Sindi',
        };
        console.info(person);
        person.id = '2';
        person.name = 'Alfin';
        console.info(person);
    });
});
