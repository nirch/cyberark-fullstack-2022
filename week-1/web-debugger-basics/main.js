var person;

console.log("hello")
let colors = ["red", "blue"]
for (let color of colors){
    console.log(color);
    
}
colors = undefined;
// console.log(colors[1])






if (colors && colors.length) {
    let word = colors[0]
    word.substring(1); 
}

for (let i = 0; i < 5; ++i) {
    console.log(i);
}


// console.log(person.name)


// let x = document.getElementById('foo');
// console.log(x.innerHTML);

const database = {
    "n_012": { name: "Charlie", country: "Mekiko" },
    "n_731": { name: "Elizabeth", country: "Fynlend" },
    "n_711": { name: "Wanda", country: "Grace" },
    "a_203": { name: "Tyler", country: "Mekiko" },
    "n_565": { name: "Jerry", country: "Vitnom" },
}

const createNewUser = function (user_id, name, country) {
    database[user_id] = {
        name: name,
        country: country
    }
}

const getUserFromDatabase = function (user_id) {
    let user = database[user_id];
    return user;
}

const checkIfUserExists = function (user_id) {
    let possibleUser = getUserFromDatabase(user_id); 
    if (possibleUser) { 
        return true 
    } 
    return false
}

const saveUser = function (user_id, name, country) {
    let exists = checkIfUserExists(user_id)

    if (!exists) { 
        createNewUser(user_id, name, country);
        return "Saved";
    } 
    return "User already exists";
}

x = 5;

if (x % 2 === 1){
    const y = 3;
    x += y;
}

saveUser("1234", "Koko", "Marocco")


const id = "n_731"
let result = saveUser(id)
let res2 =  saveUser("a_100")

console.log(result)

let foo = "ffkfk";
foo.substring(1);
