import dispacher from '../Dispatcher';

export const COLOR_APP_ACTIONS ={
    CHANGE_COLOR:'colorAppActions.changeColor',
}

export function changeColor(colorName){
    dispacher.dispatch({
        type: COLOR_APP_ACTIONS.CHANGE_COLOR,
        value: colorName
    })
}