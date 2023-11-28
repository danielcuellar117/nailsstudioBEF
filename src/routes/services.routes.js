const { Router } = require( 'express' );    // Importa el Router de Express

const { authUser } = require('../middlewares/validate-user.middleware');
const { createService, getServices, updateServiceById } = require('../controllers/service.controller');
const { getOneServiceById, deleteOneServiceById } = require('../services/service.service');

const router = Router();                    // Invoca el Router de Express

router.get('/:id', getOneServiceById  );
router.get('/', authUser, getServices);
router.post('/', authUser, createService)//post crea recuros (verbo HTTP)
router.delete('/:id', authUser, deleteOneServiceById );
router.patch('/:id', authUser, updateServiceById);

module.exports = router;                    // Expone el router para que sea usado por otros archivos