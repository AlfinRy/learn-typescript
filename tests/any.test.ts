describe('Any', function () {
	it('should suppoert in typerscript', function () {
		const person: any = {
			id: 1,
			name: 'Alfin Reynaldi',
			age: 19,
		};

		person.age = 20;
		person.address = 'Indonesia';

		console.info(person);
	});
});