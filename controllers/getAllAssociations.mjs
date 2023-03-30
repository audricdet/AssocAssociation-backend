import client from '../src/db/connect.mjs';

const getAllAssociations = async (req, res) => {
    try {
        const result = await client.query('SELECT * FROM associations');
        res.status(200).json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erreur serveur');
    }
};

export default getAllAssociations;

