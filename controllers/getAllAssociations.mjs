import client from '../src/db/connect.mjs';

const getAllAssociations = async (response) => {
    try {
        const result = await client.query('SELECT * FROM associations');
        if (response && response.status) { // Vérifier si response est défini et contient une méthode status
            response.status(200).json(result.rows);
        } else {
            console.error('L\'objet response est incorrectement défini');
        }
    } catch (error) {
        console.error(error);
        if (response && response.status) { // Vérifier si response est défini et contient une méthode status
            response.status(500).send('Erreur serveur');
        } else {
            console.error('L\'objet response est incorrectement défini');
        }
    }
};


export default getAllAssociations;