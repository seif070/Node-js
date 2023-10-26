const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
service: 'votre_service_de_messagerie', 
auth: {
user: 'bbmw6510@gmail.com',
pass: '1212980',
},
});

const mailOptions = {
from: 'ja3bou9@gmail.com',
to: 'chalfa7@gmail.com',
subject: 'Sujet de l\'e-mail',
text: 'Contenu de l\'e-mail en texte brut.',
};

transporter.sendMail(mailOptions, (error, info) => {
if (error) {
console.error('Erreur mahabch yetb3ath :', error);
} else {
console.log('E-mail envoyé avec succès. ID du message :', info.messageId);
}
});
