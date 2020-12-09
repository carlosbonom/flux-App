import dispatcher from '../Dispatcher';
import * as ColorAppActions from '../actions/ColorappActions';
import {EventEmitter} from 'events';

class ColorappStore extends EventEmitter {
    constructor(){
        super();

        this.activColor = '#ff0000'
    }

    handlerActions(action){
        switch(action.type){
            case ColorAppActions.COLOR_APP_ACTIONS.CHANGE_COLOR:{
                this.activColor = action.value;
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

const ColorAppStore = new ColorappStore();
dispatcher.register(ColorAppStore.handlerActions.bind(ColorAppStore));

export default ColorAppStore;
