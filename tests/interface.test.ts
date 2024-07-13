import { Employee, Manager } from '../src/employee';
import { Person } from '../src/person';
import { sayHello } from '../src/say-hello';
import { Seller } from '../src/seller';

describe('Interface', function () {
	it('should support in typescript', function () {
		const seller: Seller = {
			id: 1,
			name: 'Sindi',
			nib: '12312321',
			npwp: '2312312',
		};

		console.info(seller);
	});

	it('should support function interface', function () {
		interface AddFunction {
			(value1: number, value2: number): number;
		}

		const add: AddFunction = (value1: number, value2: number): number => {
			return value1 + value2;
		};

		expect(add(3, 2)).toBe(5);
	});

	it('should support indexable interface', function () {
		interface StringArray {
			[index: number]: string;
		}

		const names: StringArray = ['Sindi', 'Alfin', 'Jaki'];
		console.info(names);
	});

	it('should support indexable interface for non number index', function () {
		interface StringDictionary {
			[key: string]: string;
		}

		const dictionary: StringDictionary = {
			name: 'Sindi',
			address: 'Indonesia',
		};

		expect(dictionary['name']).toBe('Sindi');
		expect(dictionary['address']).toBe('Indonesia');
	});

	it('should support extends interface', function () {
		const employee: Employee = {
			id: '1',
			name: 'Sindi',
			division: 'IT',
		};

		console.info(employee);

		const manager: Manager = {
			id: '2',
			name: 'Alfin',
			division: 'IT',
			numberOfEmployees: 10,
		};

		console.info(manager);
	});

	it('should support function in interface', function () {
		const person: Person = {
			name: 'Sindi',
			sayHello: function (name: string): string {
				return `Hello ${name}, my name is ${this.name}`;
			},
		};

		console.info(person.sayHello('Alfin'));
	});

	it('should support intersection types', function () {
		interface HasName {
			name: string;
		}
		interface HasId {
			id: string;
		}

		type Domain = HasId & HasName;

		const domain: Domain = {
			id: '1',
			name: 'Sindi',
		};

		console.info(domain);
	});

	it('should support type  assertions', function () {
		const person: any = {
			name: 'Alfin',
			age: 19,
		};

		const person2: Person = person as Person;
		console.log(person2);
	});
});
