describe('Interface', function () {
    it('should support in typescript', function () {
        const seller = {
            id: 1,
            name: 'Sindi',
            nib: '12312321',
            npwp: '2312312',
        };
        console.info(seller);
    });
    it('should support function interface', function () {
        const add = (value1, value2) => {
            return value1 + value2;
        };
        expect(add(3, 2)).toBe(5);
    });
    it('should support indexable interface', function () {
        const names = ['Sindi', 'Alfin', 'Jaki'];
        console.info(names);
    });
    it('should support indexable interface for non number index', function () {
        const dictionary = {
            name: 'Sindi',
            address: 'Indonesia',
        };
        expect(dictionary['name']).toBe('Sindi');
        expect(dictionary['address']).toBe('Indonesia');
    });
    it('should support extends interface', function () {
        const employee = {
            id: '1',
            name: 'Sindi',
            division: 'IT',
        };
        console.info(employee);
        const manager = {
            id: '2',
            name: 'Alfin',
            division: 'IT',
            numberOfEmployees: 10,
        };
        console.info(manager);
    });
    it('should support function in interface', function () {
        const person = {
            name: 'Sindi',
            sayHello: function (name) {
                return `Hello ${name}, my name is ${this.name}`;
            },
        };
        console.info(person.sayHello('Alfin'));
    });
    it('should support intersection types', function () {
        const domain = {
            id: '1',
            name: 'Sindi',
        };
        console.info(domain);
    });
    it('should support type  assertions', function () {
        const person = {
            name: 'Alfin',
            age: 19,
        };
        const person2 = person;
        console.log(person2);
    });
});
export {};
