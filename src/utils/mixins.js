import moment from 'moment'

export default function () {
    function fromNow (datetime) {
        return datetime? moment(datetime).fromNow():'-';
    }

    function emptyImage (src) {
        return src || 'https://fakeimg.pl/350x220/DFDFDF/?text=No+Image';
    }


    return {fromNow, emptyImage};
}