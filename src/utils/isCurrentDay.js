import { format, fromUnixTime } from 'date-fns';

export const isCurrentDay = (date) => format(fromUnixTime(date), 'dd.MM HH:mm');
