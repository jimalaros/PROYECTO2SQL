import express from 'express';
import swaggerUI from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import * as options from './utils/swagger';
import db from './database';
import usuariosRoutes from './routes/usuarios.routes';
import productosRoutes from './routes/productos.routes';
import ordenesRoutes from './routes/order.routes';

const swaggerSpecs = swaggerJSDoc(options.swaggerOptions);
const app = express();

// Settings
app.set('puerto', process.env.PORT || 5000);

// Middlewares
app.use(express.json());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpecs));

app.use('/usuarios', usuariosRoutes);
app.use('/productos', productosRoutes);
app.use('/ordenes', ordenesRoutes);

// Starting the server
db.sequelize.sync({ force: false })
    .then(() => {
        console.log('Conectado a la BD');
        app.listen(app.get('puerto'), () => {
          console.log('Escuchando en el puerto ', app.get('puerto'));
        });
    })
    .catch(err => {
        console.log('Error al conectarse a la base de datos:' + err);
    });


