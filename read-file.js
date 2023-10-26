const fs = require('fs');

fs.readFile('welcome.txt', 'utf8', (err, data) => {
if (err) {
console.error('Erreur mahabech yet9ra :', err);
} else {
console.log('Contenu du fichier "welcome.txt" :');
console.log(data);
}
});
