const mysql      = require('mysql');
const connection = mysql.createConnection({ // on utilise la connection a la bdd mysql depuis localhost avec l'user root , le password root a la database gsb
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'gsb'
});

module.exports = connection   // ON EXPORTE CETTE CONNEXION POUR POUVOIR L UTILISER AILLEURS DANS NOTRE PROJET
 
