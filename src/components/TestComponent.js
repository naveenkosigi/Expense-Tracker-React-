import './TestComponent.css';

export const Test = (props) => {

    const chartCount=props.config.length;
    const chartContent = props.config.map((config) => {
        
        const maxValue = +props.maxValue;
        const currentValue = +config.value;
        const percentageToShow = String((currentValue/maxValue) * 100) + "%";

        return (
            <div className='chart-container' key={config.label}>
                <span className='chart-label'>{config.label}</span>
                <div className='data-container'>
                    <span className='data-filler' style={{height:percentageToShow}} />
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