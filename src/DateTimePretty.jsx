import React from 'react';
import moment from 'moment';

function DateTime(props) {
    return (
        <p className="date">{props.date}</p>
    );
}

function withPrettyDate(Component) {
    return function DateTimePretty(props) {
        const { date } = props;
        const formattedDate = calculatePrettyDate(date);

        return <Component {...props} date={formattedDate} />;
    };
}

function calculatePrettyDate(date) {
    const now = moment();
    const pubDate = moment(date);
    const diffInMinutes = now.diff(pubDate, 'minutes');
    const diffInHours = now.diff(pubDate, 'hours');
    const diffInDays = now.diff(pubDate, 'days');

    if (diffInMinutes < 60) {
        return `${diffInMinutes} минут назад`;
    } else if (diffInHours < 24) {
        return `${diffInHours} часов назад`;
    } else {
        return `${diffInDays} дней назад`;
    }
}

const DateTimePretty = withPrettyDate(DateTime);

export default DateTimePretty;
