/*
5. URL validation.

Write a program using a regex that matches valid URLs. Valid URLs should start with either http:// or https://, 
followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters. 
Print a message indicating if the input matches the conditions or not. */

const url=`Welcome to RegExr 0.3b, an intuitive tool for learning, writing, and testing Regular Expressions. Key features include: 
www.google.com
* real time results: shows results as you type 
* code hinting: roll over your expression to see info on specific elements 
* detailed results: roll over a match to see details & view group info below 
* built in regex guide: double click entries to insert them into your expression 
* online & desktop: regexr.com or download the desktop version for Mac, Windows, or Linux 
* save your expressions: My Saved expressions are saved locally 
* search Comm https://google.us.edi?34535/534534?dfg=g&fg unity expressions and add your own 
* create Share Links to send your expressions to co-workers or link to them on Twitter or your blog [ex. http://RegExr.com?2rjl6]

https//:www.linkedin.com/in/
`

// let pattern1='[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)'
// let flag1 = 'ig'

// const regUrl= new RegExp(pattern1,flag1)
const regUrl1=/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig
const check=url.match(regUrl1)
console.log(check);