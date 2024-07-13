describe('Object', function () {
	it('should support in typescript', function () {
		const person: { id: string; name: string; hobbies?: string[] } = {
			id: '1',
			name: 'Sindi',
		};

		console.info(person);

		person.id = '2';
		person.name = 'Alfin';

		console.info(person);
	});
});
