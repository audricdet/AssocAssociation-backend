import client from "../src/db/connect.mjs";

const insertProfileInfos = async (request, response) => {
    console.log(request.body)
    const {
        firstname,
        lastname,
        phone,
        user_id
    } = request.body;

await client.query(
        `INSERT INTO profile (firstname,
            lastname,
            phone, 
            user_id)
        VALUES ($1, $2, $3, $4)`,
        [   firstname,
            lastname,
            phone, 
            user_id],
        (error, result) => {
            if (error) {
                throw error;
            }else{
                console.log(result)
                response.send({result: result})
            }
            
        }
    );
};

export default insertProfileInfos;