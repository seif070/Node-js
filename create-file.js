const fs = require('fs');

const content = 'Hello Node';

fs.writeFile('welcome.txt', content, (err) => {
if (err) {
console.error('Erreur wa9t sna3t el fichier :', err);
} else {
console.log('Le fichier "welcome.txt" a été créé avec succès.');
}
});
