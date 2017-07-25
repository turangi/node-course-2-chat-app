const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  let users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node Course'
    },
    {
      id: '2',
      name: 'Jen',
      room: 'React Course'
    },
    {
      id: '3',
      name: 'Julie',
      room: 'Node Course'
    }];
  });

  it('should add new user', () => {
    let users = new Users();
    let user = {
      id: 123,
      name: 'Andrew',
      room: 'The Office Fans'
    };
    let resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    // take the id of one of our seed users and pass it to the function
    // remove user.  Assert that the user was indeed removed.
    let userId = '3';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    // pass in an id not part of our seed users, and assert that the array
    // has not changed
    let userId = '55';
    var user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    // pass in a valid id and get the user object back
    let userId = '2';
    let user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('should not find user', () => {
    // pass in an invalid id and assert that you do not get a user object back.
    let userId = '55';
    let user = users.getUser(userId);

    expect(user).toNotExist();
  });

  it('should return names for node course', () => {
    let resUsers = users.getUserList('Node Course');

    expect(resUsers).toEqual(['Mike', 'Julie']);
  });

  it('should return names for react course', () => {
    let resUsers = users.getUserList('React Course');

    expect(resUsers).toEqual(['Jen']);
  });
});
