function vowelCounter(name) {
    let vowel=0;
    for (let i = 0; i < name.length ; i++) {
        if (name.charAt(i)=='a'||name.charAt(i)=='A'||name.charAt(i)=='e'||name.charAt(i)=='E'||name.charAt(i)=='i'||name.charAt(i)=='I'||name.charAt(i)=='o'||name.charAt(i)=='O'||name.charAt(i)=='u'||name.charAt(i)=='U') {
            vowel++;
            
        }
        
    }
    return vowel;
    
}
let pw="pwskilesaEsIsasAsosOsuUs"

console.log(pw," in this Total vowel:-\t", vowelCounter(pw));
console.log(vowelCounter("Abhishek Kumar Singh "));