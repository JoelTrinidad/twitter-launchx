class UserView{
    static createUser(payload){
        if (!payload) {
            return {error: 'payload no existe'};
        }else if(!payload.username || !payload.username || !payload.id){
            return {error: 'necesitan tener un valor válido'};
        }
        
        return true;
    }
}

module.exports = UserView;