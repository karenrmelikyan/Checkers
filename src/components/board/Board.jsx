import {initBoard, updateBoard} from "../../context/BoardSlice";
import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import '../../style.css';
import Field from "./Field";

const Board = () => {
    const board = useSelector((state) => state.board.boardValues)
    const dispatcher = useDispatch();

    useEffect(() => {
        dispatcher(initBoard());
    }, []);

    return (
        <div className="center">
            <div className="flexible-box">
            {
                board.map((row, i) =>
                    <ul className="list-list" key={i}>
                        <Row row={row} rowCount={i} />
                    </ul>
                )
            }
            </div>
        </div>
    );
};

const Row = (props) => {
    const row = props.row.map((elem, i) => {
        switch(elem) {
            case true: return   <li key={props.rowCount + i} className="list-list-item">
                                    <Field  id={props.rowCount + ',' + i} innerStyle="field backgroundBlack"/>
                                </li>
            case 1:    return   <li key={props.rowCount + i} className="list-list-item">
                                    <Field  id={props.rowCount + ',' + i} innerStyle="field backgroundBlack" checkerColor={'blue'} />
                                </li>
            case 2:    return   <li key={props.rowCount + i} className="list-list-item">
                                    <Field  id={props.rowCount + ',' + i} innerStyle="field backgroundBlack" checkerColor={'red'} />
                                </li>
            default:   return   <li key={props.rowCount + i} className="list-list-item">
                                    <Field  id={props.rowCount + ',' + i} innerStyle="field backgroundWhite"/>
                                </li>
        }
    })

    return (row);
};

export default Board;
