const { genSaltSync, hashSync } = require('bcrypt');
const UserModel = require( '../models/User' );



const createDefaultUsers = async () => {
    const salt = genSaltSync();                 
    const pass = 'Nails#321';


    try {
        const count = await UserModel.estimatedDocumentCount();

        if( count > 0 ) return;

        // Crea usuarios por defecto
        const users = await Promise.all([
            new UserModel({
                name: "uñas uñas",
                username: "nailstudio@gmail.com",
                password: hashSync( pass, salt ),
                role: 'superadmin'
            }).save()
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