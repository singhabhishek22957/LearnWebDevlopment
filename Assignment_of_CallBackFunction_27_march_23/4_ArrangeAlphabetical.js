const books=[
    {title:"Engltish Book",author: "abhi1", year: 2010},
    {title:"Science Book",author: "abhi2", year:2008 },
    {title:"Mathematices Book",author: "abhi3", year: 2001},
    {title:"Master in C++",author: "abhi4", year:2020 },
    {title:"The concept of physics",author: "abhi5", year:2022 },
    {title:"Introduction to Database Management system",author: "abhi6", year: 2006}
]

function titleBooks(listBook,callBack){
    const returnStm=listBook.map((e)=>e.title)
    callBack(returnStm)
}

const PrintTitleOfBook=(title)=>{
    title.sort()
    const result =title.join(", ")


    console.log(result);
}
console.log(titleBooks(books,PrintTitleOfBook)); //Engltish Book, Introduction to Database Management system, Master in C++, Mathematices Book, Science Book, The concept of physics