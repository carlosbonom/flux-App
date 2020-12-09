import dispatcher from '../Dispatcher';
import * as colorappActions from '../actions/ColorappActions';
import {EventEmitter} from 'events';

class ColorappStore extends EventEmitter {
    constructor(){
        super();
    }

    handlerActions(action){

    }
}

const ColorAppStore = new ColorAppStore();
dispatcher.register(ColorappStore.handlerActions.bind(ColorAppStore));

export default colorAppStore;
