import client from '../src/db/connect.mjs';


const getProfileInfos = (request, response) => {
    const user_id = request.params.user_id

    client.query("SELECT * FROM profile WHERE user_id = $1",
        [id],
        (error, result) => {
        if (error) {
            response.status(500).json({
                error
            });
        } else {
            response.status(200).json(result.rows);
        }
    });
};

export default getProfileInfos; 