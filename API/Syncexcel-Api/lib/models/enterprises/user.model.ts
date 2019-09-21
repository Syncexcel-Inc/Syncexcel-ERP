import * as mongoose from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator'
 
var Schema = mongoose.Schema;
var schema = new Schema({
    firstName:{type:String, required: true},
    lastName:{type:String, required: true},
    password:{type:String, required: true},
    email:{type:String, required: true, unique: true},
    termsAgreed:{type:Boolean, required: true},
    isActive: {type: String, required:true}
});

schema.plugin(mongooseUniqueValidator);
export default mongoose.model('User', schema);