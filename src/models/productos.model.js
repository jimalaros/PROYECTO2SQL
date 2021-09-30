export default (sequelize, DataTypes) => {
    const Producto = sequelize.define("Productos", {
        Producto: {
            type: DataTypes.STRING
        },
        Precio: {
            type: DataTypes.FLOAT
        }
    });
    return Producto;
}
