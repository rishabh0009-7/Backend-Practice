import mongoose from "mongoose"

const schema = mongoose.schema ;
const objectId = schema.objectId;

const User = new schema({
    name:string,
    email:{type:string,unique:true},
    password:string

})

const Todo = new schema ({
    userId:objectId,
    title:string,
    done :Boolean
})


const UserModel = mongoose.model('users',User)
const TodoModel = mongoose.model('todos',Todo)


module.exports={
    UserModel,
    TodoModel
}