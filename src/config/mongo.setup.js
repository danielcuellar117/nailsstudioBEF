const { genSaltSync, hashSync } = require( 'bcrypt' );

const UserModel = require( '../models/User' );


const createDefaultUsers = async () => {
    const pass = ')947W*euG8^E';

    // Encriptar la contrasenia
    const salt = genSaltSync();                 

    try {
        const count = await UserModel.estimatedDocumentCount();

        if( count > 0 ) return;

        // Crea usuarios por defecto
        const users = await Promise.all([
            new UserModel({
                name: "Daniel",
                username: "daniel@ns.com",
                password: hashSync( pass, salt ),
                role: 'superadmin'
            }).save(),
            new UserModel({
                name: "Yecid",
                username: "yecid@ns.com",
                password: hashSync( pass, salt ),
                role: 'admin'
            }).save(),
            new UserModel({
                name: "Juan",
                username: "juan@ns.com",
                password: hashSync( pass, salt ),
                role: 'user'
            })
            
        ]);

        console.log( users );

    } 
    catch ( error ) {
        console.error( error );
    }

}

module.exports = {
    createDefaultUsers
}