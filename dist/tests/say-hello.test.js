import { sayHello } from '../src/say-hello';
describe('sayHello', function () {
    it('shoud return hello alfin', function () {
        expect(sayHello('alfin')).toBe('Hello alfin');
    });
});
