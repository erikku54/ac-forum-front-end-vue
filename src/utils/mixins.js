import moment from 'moment'

export default function () {
    function fromNow (datetime) {
        return datetime? moment(datetime).fromNow():'-';
    }

    return {fromNow};
}