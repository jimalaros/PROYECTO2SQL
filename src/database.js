import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('mintic', 'root', '12345', {
    host: 'localhost',
    dialect: 'mysql',
    logging:false
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Usuario = require('./models/usuarios.model').default(sequelize, DataTypes);
db.Producto = require('./models/productos.model').default(sequelize, DataTypes);
db.Orden = require('./models/ordenes.model').default(sequelize, DataTypes);

//tablas intermedias
db.Acción = require('./models/acciones.model').default(sequelize, DataTypes);

// para usuarios
db.Usuario.hasMany(db.Orden);
db.Orden.belongsTo(db.Usuario);

// para ordenes
db.Orden.hasMany(db.Acción);
db.Acción.belongsTo(db.Producto);

export default db;