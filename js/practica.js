function standar() {
    let name_save = document.getElementById("user_name").value;
    let lastname_save = document.getElementById("last_name").value;
    console.log(name_save, lastname_save);
    age_validate2();
}

/*Funcion anonima*/
const function_clousure = function() { console.log("Executing clousure function"); }

/*Funcion arrow */
const function_arrow = ()=>{console.log("Executing arrow function");}

const age_validate = () => {
    let user_age = document.getElementById("user_age").value;

    if(user_age < 18)
        console.log("User is teenager");   
    else 
        console.log("Is adult");
}

const age_validate2 = () => {
    let user_age = document.getElementById("user_age").value < 18 ? 
        console.log("User is teenager") :
        console.log("Is adult");
}