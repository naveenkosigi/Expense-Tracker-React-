import './CardComponent.css';

function Card(props){
    return (
        <div className={'card ' + props.className}>
            {props.children}
        </div>
    )
}

export default Card;