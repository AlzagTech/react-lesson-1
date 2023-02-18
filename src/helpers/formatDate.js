import { formatDistanceToNow, format } from 'date-fns';

export function formatDate(date) {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}

export function formatDateTransaction(date) {
  return format(new Date(date), 'Pp');
}
