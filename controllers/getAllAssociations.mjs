import client from '../src/db/connect.mjs';

const getAllPosts = async (response) => {
    try {
        const result = await client.query('SELECT * FROM associations');
        response.status(200).json(result.rows);
    } catch (error) {
        console.error(error);
        response.status(500).send('Erreur serveur');
    }
};

export default getAllPosts;