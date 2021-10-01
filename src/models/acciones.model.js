export default ( sequelize , DataTypes ) => {
    const Acción = sequelize.define('Actions', {
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
        },
        MediodePago: {
            type:DataTypes.STRING,
            allowNull: false
        }
    });
    return Acción;
}
