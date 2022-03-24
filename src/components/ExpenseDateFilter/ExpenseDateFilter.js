import './ExpenseDateFilter.css';

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
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
            </select>
        </div>
    )
}