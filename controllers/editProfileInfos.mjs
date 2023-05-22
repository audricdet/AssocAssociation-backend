import client from '../src/db/connect.mjs';

const editProfileInfos = async (req, res) => {
    try {
    const { profileId, firstname, lastname, phone } = req.body;

    const query = `
        UPDATE "profile"
        SET "firstname" = $1, "lastname" = $2, "phone" = $3
        WHERE "id" = $4
    `;
    const values = [firstname, lastname, phone, profileId];

    await client.query(query, values);

    res.status(200).json({ message: 'Informations de profil mises à jour avec succès' });
        } catch (error) {
            console.error('Erreur lors de la mise à jour des informations de profil :', error);
            res.status(500).json({ message: 'Une erreur est survenue lors de la mise à jour des informations de profil' });
    }
};

export default editProfileInfos;
