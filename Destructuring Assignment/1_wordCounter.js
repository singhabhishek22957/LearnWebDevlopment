function wordCountGenerator(str) {
    // Split the string into an array of words
    const words = str.split(' ');
  
    // Create an empty map to store the word counts
    const wordCountMap = new Map();
  
    // Loop through each word and update the count in the map
    for (const word of words) {
      // Remove any non-alphabetic characters
      const cleanWord = word.replace(/[^a-zA-Z]/g, '');
  
      // Convert the word to lowercase to ignore case sensitivity
      const lowercaseWord = cleanWord.toLowerCase();
      
  
      // Update the count in the map
      const currentCount = wordCountMap.get(lowercaseWord) || 0 ;
    //   console.log(currentCount);
      wordCountMap.set(lowercaseWord, currentCount+1);
    }
  
    return wordCountMap;
  }
  const str = "The quick brown fox jumps over the lazy dog";
  const str1=`You are building a word count generator that will take a large string of text as input and output the words and 
  the number of times they are present in the string. Your task is to write a function that can count the 
  occurrences of each word in the string and return a Map containing each word's count. For simplicity, you can 
  assume that the string only contains alphabetic characters and spaces. in javascript `
const wordCounts = wordCountGenerator(str1);
console.log(wordCounts);
