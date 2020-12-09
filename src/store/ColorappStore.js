import dispatcher from '../Dispatcher';
import * as ColorappActions from '../actions/ColorappActions';
import {EventEmitter} from 'events';

class ColorappStore extends EventEmitter {
    constructor(){
        super();

        this.activColor = '#ff0000'
    }

    handlerActions(action){
        switch(action.type){
            case ColorappActions.COLOR_APP_ACTIONS:{
                this.activColor= action.value;
                this.emit('storeUpdated');
                break;
            }
            default:{

            }
        }
    }

    getActivColor(){
        return this.activColor
    }
}

const ColorAppStore = new ColorAppStore();
dispatcher.register(ColorappStore.handlerActions.bind(ColorAppStore));

export default colorAppStore;
