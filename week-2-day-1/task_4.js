var library=[
    {
        title:"javascript",
        price:500,
        readers:[
            {
                name:"person 1",
                count:300
            },
            {
                name:"person 2",
                count:400
            }
        ],
        authorDetails:{
            name:"Raj",
            age:40
        }
    },
    {
        title:"Nodejs",
        price:600,
        readers:[],
        authorDetails:{
            name:"Raj",
            age:40
        }
    }
]



/*Update the count of person 2 inside readers Array in javascript*/

library[0].readers[1].count=100;
console.log(library[0].readers[1].count=100);

/* Insert a new key called email and assign a value email1@gmail.com and email2@gmail.com
respectively in both authorDetails object*/


library[0].authorDetails.email="email1@gmail.com";
console.log(library[0].authorDetails.email);

library[1].authorDetails.email="email2@gmail.com";
console.log(library[1].authorDetails.email);



/* Insert a new reader in the readers array for Nodejs.*/

library[1].readers[0]={name:"Raj",count:500};
console.log(library[1].readers[0]);


/*Create a New Object in the library for a new Book called SQL.*/

library[2]={
    title:"SQL",
    price:300,
    readers:[
        {
            name:"person 1",
            count:300
        },
        {
            name:"person 2",
            count:400
        }
    ],
    authorDetails:{
        name:"Raj",
        age:40
    }
}
console.log(library[2]);


/*Find the datatype of author age in Nodejs Object.*/

typeof(library[1].authorDetails.age);
console.log(library[1].authorDetails.age);