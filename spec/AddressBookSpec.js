describe('Address Book', function () {
    var addressBook, thisContact;

    beforeEach(function () {
        addressBook = new AddressBook();
        thisContact = new Contact();
    });

    it('should be able to add a contact', function () {


        addressBook.addContact(thisContact);

        expect(addressBook.getContact(0)).toBe(thisContact);
    });

    it('should be able to delete a contact', function () {
        var addressBook = new AddressBook(),
            thisContact = new Contact();

        addressBook.addContact(thisContact);
        addressBook.deleteContact(0);

        expect(addressBook.getContact(0)).not.toBeDefined();

    });

});

describe('Async Address Book', function () {
    var addressBook = new AddressBook();

    beforeEach(function (done) {
        addressBook.getInitialContacts(function () {
            done();
        });
    });

    it('should grab initial contacts', function (done) {
        expect(addressBook.initialComplete).toBe(true);
        done();
    });


});

describe('Promise Address Book', function () {
    var addressBook = new AddressBook();

    beforeEach(JasminePromiseMatchers.install);


    it('should resolve', function (done) {
        expect(addressBook.promiseMe()).toBeResolved(done);

    });

    it('should return result', function (done) {
        expect(addressBook.promiseMe()).toBeResolvedWith('result', done);

    });

    it('should reject', function (done) {
        expect(addressBook.rejectMe()).toBeRejected(done);
    });

    it('should reject with error', function (done) {
        expect(addressBook.rejectMe()).toBeRejectedWith('error', done);
    });



    afterEach(JasminePromiseMatchers.uninstall);
});
