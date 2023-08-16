var mongoose = require('mongoose');

/**Creación de esquema de Mongoose para colocar nuestro modelado */
var Schema = mongoose.Schema;

var usuarioSchema = Schema({
    /**Se colocan los campos de la colección */
    nombre: {type: String, required: true},
    apellidos: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    rol: {type: String, required: true},
    password: {type: String, required: true},
    estado: {type: Boolean, default: true, required: true},
    createdAt: {type: Date, default: Date.now},
    productosFavoritos: [{type: Schema.Types.ObjectId, ref: 'Producto'}], // Referencia a los productos favoritos
    carrito: [{type: Schema.Types.ObjectId, ref: 'Producto'}] // Referencia a los productos en el carrito
});

/**Como primer parámetro recibe el nombre textual del modelo.
 * El segundo es el objeto esquema.
 */
module.exports = mongoose.model('usuario', usuarioSchema);