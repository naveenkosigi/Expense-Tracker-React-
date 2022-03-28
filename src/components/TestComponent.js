import './TestComponent.css';

export const Test = (props) => {

    const chartCount=props.config.length;
    const chartContent = props.config.map((config) => {
        return (
            <div className='chart-container'>
                <span className='chart-label'>{config.label}</span>
                <div className='data-container'>
                    <span className='data-filler' />
                </div>
            </div>
        );
    });

    return(
        <div className='chart-listview-container expenses-container'>
            {chartContent}
        </div>
    );
}