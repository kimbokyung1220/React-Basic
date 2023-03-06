import React from 'react';

const reserveNotifications = [
    {
        message: "안녕하세요 오늘 일정 알려드릴께요"
    },
    {
        message: "점심식사 시간입니다"
    },
    {
        message: "곧 미팅이 있어요"
    },
];

var timer;

class NotificationList extends React.Component() {
    constructor(props) {
        super(props);

        this.state = {
            Notifications: [],
        };
    }
    componentDidMount() {
        const { Notifications } = this.state;
        timer = setInterval(() => {
            if (Notifications.length < reserveNotifications.length) {
                const index = Notifications.length;
                Notifications.push(reserveNotifications[index]);
                this.setState({
                    Notifications: Notifications,
                });
            } else {
                clearInterval(timer);
            }
        }, 1000);
    }

    render() {
        return (
            <div>
                {this.state.Notifications.map((Notification) => {
                    return <Notification message={Notification.message} />
                })}
            </div>
        )
    }
}

export default NotificationList;