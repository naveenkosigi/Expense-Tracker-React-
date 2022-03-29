import './TestComponent.css';

export const Test = (props) => {

    const chartCount=props.config.length;
    const chartContent = props.config.map((config) => {
        
        const percentageToShow = String(config.value) + "%";
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