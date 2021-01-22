class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {

  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser'
  };
  accessLevel;
  constructor({email, accessLevel}) {
    super(email)
    this.accessLevel = accessLevel
  }
  
}

const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER
});

console.log(mango.email); // mango@mail.com
console.log(mango.accessLevel); // superuser
