const connection = require('../config/db')  // IMPORTE CONNEXION depuis le config/db


const addUser = (user, callback) => { // creation d"utilisateur
    connection.connect()
    var query =  'INSERT INTO utilisateur (id, nom, prenom, login, mdp, adresse, cp, ville, dateEmbauche, role ) VALUES (?)'
    var values = [user.id, user.nom, user.prenom, user.login, user.mdp, user.adresse, user.cp, user.ville, user.dateEmbauche, user.role ]
    // EXECUTION DE LA REQUETE
    connection.query(query, [values], callback)
    connection.end()
}

const updateUser = (id, user, callback) => { //mettre a jour utilisateur 
    connection.connect()
    var query =  'UPDATE utilisateur SET nom=(?), prenom=(?), login=(?), mdp=(?), adresse=(?), cp=(?), ville=(?), dateEmbauche=(?), role=(?) WHERE id= (?)'
    var values = [user.nom, user.prenom, user.login, user.mdp, user.adresse, user.cp, user.ville, user.dateEmbauche, user.role, id]
    connection.query(query, values, callback)
    connection.end()
}
const deleteUser = (id, callback) => { //supprimer utilisateur
    connection.connect()
    var query1 =  'DELETE FROM utilisateur WHERE id= (?)'
    connection.query(query1, id, callback)
    connection.end()
}
const searchByLogin = (login, callback) => { // recherche par identifiant
    connection.query('SELECT * from  utilisateur WHERE login = (?)', login ,callback)
}

const searchAll = (callback) => {       // Recherche toutes les personnes 
    
    connection.query('SELECT * from utilisateur', (callback))

}

module.exports = {
    searchAll,
    addUser,
    updateUser,
    deleteUser,
    searchByLogin
}

/* 
INSERER UN UTILISATEUR SAISIR UTILISATEUR
model controller routeur
ajouter supprimer modifier
*/