export default (sequelize, DataTypes) => {
    const Usuario = sequelize.define("Usuarios", {
        Nombre: {
            type: DataTypes.STRING
        },
        Apellido: {
            type: DataTypes.STRING
        },
        Correo: {
            type: DataTypes.STRING
        },
        Contraseña: {
            type: DataTypes.STRING
        },
        Direccion: {
            type: DataTypes.STRING
        },
        Administrador:{
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    return Usuario;
}
