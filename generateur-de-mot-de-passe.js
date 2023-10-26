const generatePassword = require('generate-password');

function generateRandomPassword() {
const password = generatePassword.generate({
length: 12, 
numbers: true,
symbols: false, 
uppercase: true, 
strict: true, 
});

console.log('Mot de passe généré :', password);
}

generateRandomPassword();
