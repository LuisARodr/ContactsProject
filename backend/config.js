module.exports = {
    port: process.env.PORT || 4000,
    db: process.env.MONGODB || 
        'mongodb+srv://testuser:123tamarindo@hellomongo-vqjit.mongodb.net/test?retryWrites=true' 
}