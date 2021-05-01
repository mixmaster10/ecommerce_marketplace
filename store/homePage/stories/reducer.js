export default function stories(state=null, action) {
    
    switch(action.type) {
        case 'LOAD_STORIES_DATA':
            return action.payload;
        default: 
            return state; 
    }
}