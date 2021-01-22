var names = ['Kamal', 'Jamal', 'Salam', 'Jabbar', 'Rofiqul'];

function megaFriend(heighest){

    var max = heighest[0].length;
    heighest.map(v => max = Math.max(max, v.length));
    
    return result;
}


console.log(megaFriend(names))