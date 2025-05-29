console.log("zdfas");

// variable are used to store data in JavaScript 
// syntac to decleare the variable in javascrip

// ex-let/const storage_name=value 
//  let fruit="mango";

//  Vlaue Assignments  ->assginment done by equal (=) operator

let fruit = "mango";
 fruit ="kiwi";

//  so for let we and redeclare any variale 

let fruit="mango",let vegetable = "Carrots"

fruit = vegetable // is this possible to assing two variaable name it all depends on the type of value in the variable 

//  there are two type value exits in javascript

    1-premetive -> number ,String,Boolean
    2-nonPremetive ->function,Object,Array

    // for any premetive value the value when you do the assignments is know as Pass By Value 
    //  pass by value is happend only for premetive kind of data type 
    for example 
    let fruit="manogo";
    let vegetable="carrot";

    now 
    fruit=vegetable

    // what happend here 
    the value of both furit and vegetable is same and the fruit is in the left and the vegetbale is in the right side 

    so the value of fruit also became carrot  and the mango vanished remember only the left side value changed in right side nothing going to happend 



    * rules of decreating a Variable in JavaScript 
        1-The name mush have digit(0-9) or letters
        2-The name can have $  and _.
        3-The first character must not be a digit 
        4-No Reserved Keywords
    ex->
        let $ = 'dollar'; ->valid name 
        let 2morrow ;->not 
        let _ = "underscore"; no 
        let react-play ->not valid 

 # here variable names are case sensative so if we declare any things in capital or small letter then both are not same they are different different variable 

 for example ->
    let myName= "Ashutosh";
    let MyName= "Ashutosh";

    here both are not same baby 

# Variable Name Standards 

- Use camelCase.
- Human Readable. 
- The name should match the use case.


# now discuss about (Var,Let, and const ) specifiers
 - `var`- function-scoped, can be redeclard (not recommended)
 - `let` - Blocked-scoped ,can be reassigned 
 - `const` -Blocked-scoped, ** cannot ** be reassigned 


 # we will read Scoped things lated 

 # first VAR
    - it meas it can be redeclare,re assignned 

    ex ->

        var address= "Bangluru",
        console.log(address);

        var address="USA",
        console.log(address);
        
    # usually  in programming we declare the variable once and use it multiple times but here it is so much confusing 
    # so here we decreate a vaibral only once but assign it as many times as you want based on use case 
     use variable name as many times 
     and it create lots of confusion  that is why Let comes into the picutre  in ES6 (Let and Const come )

    # #