
// random password generate


function generatePassword(length, includelowercase,includeUppercase, includeNumbers, includeSymbols){

    const lowercaseChars = "asdfghjklzxcvbnm";
    const uppercaseChars = "ASDFGHJKXCVBNM";
    const numbercaseChars = "234567890";
    const symbolChars= "!@#$%^&*#$%";

    let allowedChare = "";
    let password ="";

    allowedChare +=includelowercase ? lowercaseChars : " ";
    allowedChare +=includeUppercase ? uppercaseChars : " ";
    allowedChare += includeNumbers ? numbercaseChars : " ";
    allowedChare +=includeSymbols ? symbolChars : " ";

    if (length <=0){
        return `(password length must be at least 1) `;
    }
    if (allowedChare.length === 0){
        return `( At least 1 set of character needs to be selected)`
    }
    for (let i=0;i<length;i++){
        const randomIndex = Math.floor(Math.random() * allowedChare.length) ;
        password +=allowedChare[randomIndex];
    }
    return password;

}
const psswordelength = 12;
const includelowercase = true;
const includleUppercase = true;
const includeNumbers = true;
const includeSymbols= true;

const password =  generatePassword( psswordelength, includelowercase, includleUppercase,includeNumbers, includeSymbols);


console.log(`Generated password : ${password}`)