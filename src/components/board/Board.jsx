import {initBoard, updateBoard} from "../../context/BoardSlice";
import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import Row from './Row';
import '../../style.css';

const Board = () => {
    const board = useSelector((state) => state.board.boardValues)
    const dispatcher = useDispatch();

    useEffect(() => {
        dispatcher(initBoard());
    }, []);

    function clickHandler(id) {
        const [row, column] = id.split(',')
        console.log(row, column);
    }

    return (
        <div className="center">
            <div className="flexible-box">
            {
                board.map((row, i) =>
                    <Row row={row} rowCount={i} clickHandler={clickHandler} key={i} />
                )
            }
            </div>
        </div>
    );
};

export default Board;
