import '../../style.css';
import Checker from "./Checker";

const Field = (props) => {
    return (
        <div id={props.id} className={props.innerStyle}>
            <Checker color={props.checkerColor}/>
        </div>
    );
};

export default Field;