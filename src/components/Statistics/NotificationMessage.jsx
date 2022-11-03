import PropTypes from 'prop-types';
import css from './Notification.module.css';
export const NotificationMessage = (props) => {
    return (
        <div>
            <span className={css.notification__message}>{props.message}</span>
        </div>
    )
}

NotificationMessage.protoType = {
    message: PropTypes.string,
}

export default NotificationMessage;