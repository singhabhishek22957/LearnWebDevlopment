/*
4. Filtering and Capitalizing: Books Published After 2010 with Author Names.

Write a program that takes a list of books, including their authors and publication years as input. The program 
should then filter out all books that were published before 2010 and create a new array with the remaining 
books, but with their author names capitalized. */

const book=[
{title:"The India Story " , author:"Bimal Jalal" ,year: 2022},
{title: "A Place Called Home"   ,author:  'Preeti Shenoy'  , year: 2008  },
{title:"Modi@20:Dreames Meeting Delivery"    ,author: 'vp venkaiah naidu'   , year: 2019 },
{title: 'Lal Salam'    ,author:  'smriti rani'   , year: 2011 },
{title:  'Queen of fire'  ,author: 'devika ranagachari'   , year: 2000 },
{title: 'Hear YourSelf'   ,author:  'Indian Author Pream Rawat '  , year:  2016 }

]

const book2010= book.filter(book=>book.year>=2010).map(book=>({...book,author:book.author.toUpperCase()}))

console.log("These books are published after 2009\n",book2010);

  