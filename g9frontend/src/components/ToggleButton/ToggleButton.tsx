export default function ToggleButton(props){
    return(
        <li>
            <button onClick={props.onSelect}> {props.children} </button>
        </li>
    );
}
