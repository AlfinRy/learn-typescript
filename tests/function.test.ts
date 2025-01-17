describe('Function', function () {
	it('should support in typescript', function () {
		function sayHello(name: string): string {
			return `Hello ${name}`;
		}

		expect(sayHello('Alfin')).toBe('Hello Alfin');

		function printHello(name: string): void {
			console.info(`Hello ${name}`);
		}

		printHello('Sindi');
	});

	it('should support deafult value', function () {
		function sayHello(name: string = 'Guest'): string {
			return `Hello ${name}`;
		}

		expect(sayHello()).toBe('Hello Guest');
		expect(sayHello('Sindi')).toBe('Hello Sindi');
	});

	it('should support rest parameter', function () {
		function sum(...values: number[]): number {
			let total = 0;
			for (const value of values) {
				total += value;
			}
			return total;
		}

		expect(sum(1, 2, 3, 4, 5)).toBe(15);
	});

	it('should support optional parameter', function () {
		function sayHello(firtName: string, lastName?: string): string {
			if (lastName) {
				return `Hello ${firtName} ${lastName}`;
			} else {
				return `Hello ${firtName}`;
			}
		}

		expect(sayHello('Alfin')).toBe('Hello Alfin');
		expect(sayHello('Sindi', 'Srihartati')).toBe('Hello Sindi Srihartati');
	});

	it('should support function overloading', function () {
		function callMe(value: number): number;
		function callMe(value: string): string;
		function callMe(value: any) {
			if (typeof value === 'string') {
				return value.toUpperCase();
			} else if (typeof value === 'number') {
				return value * 10;
			}
		}

		expect(callMe(10)).toBe(100);
		expect(callMe('Sindi')).toBe('SINDI');
	});

	it('should support function as parameter', function () {
		function sayHello(name: string, filter: (name: string) => string) {
			return `Hello ${filter(name)}`;
		}

		function toUpper(name: string): string {
			return name.toUpperCase();
		}
		expect(sayHello('Alfin', toUpper)).toBe('Hello ALFIN');

		// Anonymous Function
		expect(
			sayHello('Alfin', function (name: string): string {
				return name.toUpperCase();
			})
		).toBe('Hello ALFIN');

		// Arrow Function
		expect(sayHello('Alfin', (name: string): string => name.toUpperCase())).toBe('Hello ALFIN');
	});
});
