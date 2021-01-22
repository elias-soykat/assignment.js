// repository link:  https://github.com/elias-soykat/assignment.js

//problem one

function kilometerToMeter(kilometer){
    var meter = kilometer*1000;
    return meter
}

var schoolToCollege = kilometerToMeter(50);



// problem two

function budgetCalculator(watch, mobile, laptop){
    var input = watch*50 + mobile*100 + laptop*500;
    return input
}

var totalCost = budgetCalculator(31, 12, 15);



// problem three

function hotelCost(days){
    var cost;

if(days > 0){
    if(days <= 10){
        cost = days*100;
        return cost;
    }

    else if(days <= 20){
        cost = (10*100) + (days-10)*days*80;
        return cost;
    }
    else{
        cost =(10*100) + (10 * 80) +[(days-20)*50];
        return cost
    }

}else{
    return 'this is not a valid input';
}

}



// problem four

var megaFriend = ["jamal", "kamal", "rahim", "karim", "jabbar", "sofiqul"];
var maximum = megaFriend[0];

for(var i = 0; i < megaFriend; i++){
    var element = megaFriend[i];
    if(element > maximum){
        maximum = element;
    }
    else{ return maximum

    }
}