let users = [
    {
        name: 'John',
        login: 'qw',
        password: '123'
    },
    {
        name: 'Mike',
        login: 'er',
        password: '456'
    },
    {
        name: 'Alex',
        login: 'ty',
        password: '789'
    }
];

function print(name, user) {
    for (let index = 0; index != user.length; index++) {
        if (name == user[index].login) {
          let ps = prompt('password');
          if (ps == user[index].password) {
              alert('Hi, ' + user[index].name);
              break;
          } else {
              console.log('Неверный пороль');
              break;
          }
        } else {
            alert('Неверный логин');
            break;
        }
    }
}
let names = prompt('Введите логин: ');
print(names, users);