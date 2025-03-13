interface newUser{
    name:string;
    age:number;
}

const peopleArr:newUser[] = [{
    name:"nitesh",
    age:20
},{
    name:"aran",
    age:21,
},
{
    name:"altoic",
    age:19
},
]

const filterPeople = <T,U extends keyof T>(arr:T[],key:U,value:T[U])=>{
          return arr.filter((a)=>a[key]===value)
}

const filteredByName = filterPeople<newUser,"name">(peopleArr,"name","nitesh");
const filteredByAge = filterPeople<newUser,"age">(peopleArr,"age",19);
console.log(filteredByAge);
console.log(filteredByName);