import './ExpenseDateFilter.css';
import { defaultYears } from '../../CommonConfig';

export const ExpenseDateFilter = (props) => {

    const onDateChange = (event) => {
        props.onYearChange(event.target.value);
    };

    return(
        <div className="expense_date_container">
            <label htmlFor="year_picker">
                Filter By Year
            </label>
            <select className="expense_date_picker" value={props.date} onChange={onDateChange} id="year_picker">
                {defaultYears.map((date) => 
                    (<option value={date}>{date}</option>)
                )}
            </select>
        </div>
    )
}