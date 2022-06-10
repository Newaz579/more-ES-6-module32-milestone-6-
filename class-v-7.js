class Support {
    name;
    designation = 'Support web deb';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, 'Start a support session');
    }
}
const aamir = new Support('Aamir Khan', 'BD');
const salam = new Support('Solaiman Khan', 'Dubai');
aamir.startSession();