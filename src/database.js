import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('mintic', 'root', '12345', {
    host: 'localhost',
    dialect: 'mysql'
});

(async () => {
    try {
        await sequelize.authenticate(); // send query to the db
        console.log('Conexion a la BD exitosa');
    } catch (error) {
        console.error('Conexion a la BD fallida: ', error);
    }
})();

export default sequelize;