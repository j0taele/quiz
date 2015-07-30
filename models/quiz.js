// Definicion del modelo de Quiz 
// define la estructura de la tabla de quizes
 
module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Quiz',
			{
				pregunta: DataTypes.STRING,
				respuesta: DataTypes.STRING,
			});
}