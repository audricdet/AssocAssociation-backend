import client from "../src/db/connect.mjs";

const editProfileInfos = async (request, response) => {
    console.log(request.body);
    const {
        user_id,
        firstname,
        lastname,
        phone
    } = request.body;

    try {
        const query = `
            UPDATE "profile"
            SET firstname = $1, lastname = $2, phone = $3
            WHERE user_id = $4
        `;
        const values = [firstname, lastname, phone, user_id];

        const result = await client.query(query, values);

        console.log(result);
        response.send({ result: result });
    } catch (error) {
        console.error("Erreur lors de la mise à jour des informations de profil :", error);
        response.status(500).json({ message: "Une erreur est survenue lors de la mise à jour des informations de profil" });
    }
};

export default editProfileInfos;

