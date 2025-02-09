import DateService from './date';

export const formatDetail = (detail: string | number | undefined) => detail ?? '...loading';
export const formatDate = (date: string | undefined) => (date ? DateService.toUIFormat(new Date(date)) : '...loading');
