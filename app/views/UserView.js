class UserView{
    static createUser(payload){
        if (!payload) {
            return {error: 'payload no existe'};
        }else if(payload.username == null || payload.username == null || payload.id == null){
            return {error: 'necesitan tener un valor válido'};
        }
        
        return true;
    }
}

module.exports = UserView;