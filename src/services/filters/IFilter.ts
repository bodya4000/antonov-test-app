import IDateFilter from './IDateFilter'
import IPriceFilter from './IPriceFilter';
import ISearchFilter from './ISearchFilter';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export default interface IFilter extends ISearchFilter, IPriceFilter, IDateFilter {}
