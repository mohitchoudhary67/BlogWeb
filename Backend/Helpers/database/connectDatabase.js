const mongoose = require("mongoose")

const connectDatabase =async  () => {

    await mongoose.connect("mongodb+srv://mohitchodhary96:zNplpGuwiEISvHJS@cluster0.useisb6.mongodb.net/todo?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
        console.log("database connected succesffully")
    }).catch((error)=>{
        throw new Error(error)
    })

    console.log("MongoDB Connection Successfully")
// eddarfd
}
// mongodb://mohitchodhary96:uwZqZyTTrL@8@cluster0.useisb6.mongodb.net:27017/todo
module.exports = connectDatabase
// mongodb+srv://mohitchodhary96:N7!uwZqZyTTrL@8@cluster0.useisb6.mongodb.net/todo?retryWrites=true&w=majority&appName=Cluster0