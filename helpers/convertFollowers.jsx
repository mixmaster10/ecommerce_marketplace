export default function convertFollowers(integer) {
    if (integer < 1000) {
        return integer;
    } else {
        if(integer === undefined){
            return 0;
        } else {
            const newString = integer.toString();
            const newInteger = newString.slice(0, newString.length - 3);
            return newInteger + 'K';
        }

    }
}
