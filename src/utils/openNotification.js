import { notification } from 'antd';

export function openNotification({ type, title, text }) {
  notification[type]({
    message: title ?? 'error',
    description: text ?? 'city not found',
  });
}
