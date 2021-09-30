export default ( sequelize , DataTypes ) => {
    const Acción = sequelize.define('Acciónes', {
        NombreProducto:{
            type: DataTypes.STRING,
            allowNull: false
        },
        PrecioProducto:{
            type:DataTypes.FLOAT,
            allowNull:false
        },
        Cantidad:{
            type:DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 1
        }
    });
    return Acción;
}
