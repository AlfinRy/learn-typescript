describe('Type Alias', function () {
    it('should support in typescript', function () {
        const category = {
            id: 1,
            name: 'Handphone',
        };
        const product = {
            id: '1',
            name: 'OnePlus 7',
            price: 120000,
            category: category,
        };
        console.info(category);
        console.info(product);
    });
});
export {};
