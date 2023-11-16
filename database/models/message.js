module.exports = (sequelize, dataTypes) =>{

    const alias = 'Message';

    const cols = {
        id:{ 
            type: dataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:dataTypes.STRING,
            allowNull:false,
        },
        mailtelephone:{
            type:dataTypes.STRING,
            allowNull:false
        },
        message:{
            type: dataTypes.STRING,
            allowNull:false
        }
    };
    const config = {
        tableName:'Message',
        timestamps:true,
        underscored:false
    };

    let Message = sequelize.define(alias,cols,config);

    return Message;
};