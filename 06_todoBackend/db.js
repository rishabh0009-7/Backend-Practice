import mongoose from "mongoose"

const schema = mongoose.schema ;
const objectId = schema .objectId ;



const User = new schema({
    name :String,
    email:{
        type:String,
        unique:true
    },
    password:string
})


const Todo = new schema ({
    userId :objectId,
    title :string,
    done: boolean
})



const UserModel = mongoose.model ('users',User);
const TodoModel = mongoose.model('todos',Todo)


module .exports = {
    UserModel,
    TodoModel
}

