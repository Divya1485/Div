//object

// let person ={
//     name: 'Divya',
//     age : 21,
//     favColor: 'White'

// }
// console.log(person);

// console.log(person.name);
// console.log(person.age);

//change properties in object
//update
// person.name= 'Divya Killedar';
// console.log(person);

// //adding new property
// person.gender='female';
// console.log(person);?

//Delete property
// delete person.favColor;
// console.log(person);


let person ={
        name: 'Divya',
         age : 21,
         favColor: 'White',
         fun:function (){
            return(`my name is ${this.name} and may age is ${this.age}`);
         },
        newObj:{
            gender:"female",
            address:"main road khadkevada",

        }     }
    //  console.log(person.print());
    //   console.log(person.fun());
    console.log(person.newObj.address);