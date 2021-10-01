export default ( sequelize , DataTypes ) => {
    const Orden = sequelize.define('Ordenes', {
        NombreUsuario: {
            type:DataTypes.STRING,
        },
        DirecciónUsuario: {
            type:DataTypes.STRING,
            allowNull: false
        }
    });
    return Orden;
}
