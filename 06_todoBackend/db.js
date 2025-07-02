import mongoose from "mongoose"


const User = new Schema({
    name :String,
    email:{
        type:String,
        unique:true
    },
    password:String
})


const Todo = new Schema ({
    userId :{
        type :mongoose.Schema.Types.ObjectId,
        ref:"User"


    },
    title :String,
    done: Boolean
})



const UserModel = mongoose.model ('users',User);
const TodoModel = mongoose.model('todos',Todo)


export{
    UserModel,
    TodoModel
}
