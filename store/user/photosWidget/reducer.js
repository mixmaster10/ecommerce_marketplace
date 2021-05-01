export default function widgetPhotos(state = null, action) {

    switch (action.type) {
        case 'LOAD_WIDGETPHOTOS_DATA':
            return action.payload;
        default: break
    }
    return state
}