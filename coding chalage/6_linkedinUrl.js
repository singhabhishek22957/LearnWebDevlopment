/*
6. LinkedIn Profile URL Validator.

As a developer, you want to create a program that validates LinkedIn profile URLs to ensure that they are 
formatted correctly and contain only valid characters. Valid LinkedIn profile URLs should start with https://
www.linkedin.com/in/ followed by a combination of one or more letters, digits, underscores, or hyphens, and 
end with a letter or digit. The length of the profile ID should be between 5 and 30 characters.


The program should use a regular expression to match valid LinkedIn profile URLs, and should not match URLs 
that do not follow this format or contain invalid characters. The program should provide clear output messages 
indicating whether each input is a valid LinkedIn profile URL or not. */


const url=`Welcome to RegExr 0.3b, an intuitive tool for learning, writing, and testing Regular Expressions. Key features include: 

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
const regUrl1=/[(http(s)?):\/\/www.linkedin._\+~#=]{2,256}\.[a-z]{3,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig
const check=url.match(regUrl1)
console.log(check);