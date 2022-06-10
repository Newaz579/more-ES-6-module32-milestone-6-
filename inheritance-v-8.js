class TeamMember {
    name;
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}

class Support extends TeamMember {
    groupSupportTime;
    designation = 'Support web dev';
    constructor(name, address, time) {
        super(name, address, time);
        this.groupSupportTime = time;
    }
    startSession() {
        console.log(this.name, 'Start a support session');
    }
}
class StudentCare extends TeamMember {
    designation = 'Care web dev';
    buildARoutine(student) {
        console.log(this.name, 'Build a routine for', student);
    }
}

class NeptuneDev extends TeamMember {
    codeEditor;
    designation = 'Support app dev';
    constructor(name, address, editor) {
        super(name, address);
        this.codeEditor = editor;
    }
    releaseApp(version) {
        console.log(this.name, 'release app version', version);
    }
}
const aamir = new Support('Aamir Khan', 'BD', 11);
const salmam = new Support('Solaiman Khan', 'Dubai', 4);
const sharuk = new Support('SRK Khan', 'Dubai', 9);
const akshay = new Support('Akshay Kuman', 'Mumbai', 11);

const alia = new StudentCare('Alia Bhatt', 'Mumbai');
// aamir.startSession();
console.log(alia);

const ash = new NeptuneDev('Ash', 'Mumbai', 'CodeJam');
console.log(ash);
ash.releaseApp('1.4.5');