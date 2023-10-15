// write an array that holds 10names of your friends and family

let FriendsAndFamily = [ 'Halimo' , 'Jama', 'Farah', 'Noor', 'Bilan', 'Saynab', 'Sacdiya', 'Hassan', 'Fatima', 'Ali']

// How many iteration functions come with arrays

//  FriendsAndFamily.forEach()
//  FriendsAndFamily.map()
//  FriendsAndFamily.filter()
//  FriendsAndFamily.reduce()
//  FriendsAndFamily.every()

// Print every element in the FamilyAndFriends array,using forEach(),  and put hello in front of every name

FriendsAndFamily.forEach(
    function(name){
        console.log('Hi ' + name)
    }
)


// convert the above function to an arrow function

FriendsAndFamily.forEach(name =>console.log('Hi ' + name))
