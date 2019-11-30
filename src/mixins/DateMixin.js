import moment from 'moment'
export const dateMixin = {
    filters: {
        formatDate(date) {
            return moment(date).format('YYYY-MM-DD HH:mm:ss');
        },
        diffForHumans(date) {
            return moment(date).startOf('minute').fromNow();
        }
    }
}