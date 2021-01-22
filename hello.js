var names = ['Kamal', 'Jamal', 'Salam', 'Borkot', 'Rofiul'];


function megaFriend(heighest){
    var maximum = heighest[0].length;
    heighest.map(v => maximum = Math.max(maximum, v.length));
    result = heighest.filter(v => v.length == maximum);
    return result;
}

console.log(names)