function addMessage(user, message){

    return new Promise((resolve, rejec) =>{

        if (!user || !message){
            console.error('No hay usuario o mensaje')
            reject('Los datos sin incorrectos');
            return false;
        }
        const fullMessage = {
            user: user,
            message: message,
            date: new Date()
        }
    
        console.log(fullMessage)
        resolve (fullMessage)

    });

    

}

module.exports = {
    addMessage,
};