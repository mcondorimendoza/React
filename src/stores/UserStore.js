import { extendObservable } from 'mobx';

/**
 * UserStore: Para el almacenamiento de los Usuarios
 */
class UserStore {
    constructor() {
        extendObservable(this,  {

            loading: true,
            isLoggedIn: false,
            username: ''

        })
    }
}

export default new UserStore();
