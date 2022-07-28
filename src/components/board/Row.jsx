import '../../style.css';

const Row = (props) => {
    return (
        <ul className="list-list">
            {
                props.row.map((elem, i) => elem
                    ?
                    <li key={props.rowCount + i} className="list-list-item">
                        <div
                            id={props.rowCount + ',' + i}
                            onClick={(e) => props.clickHandler(e.target.id)}
                            className="field backgroundBlack">
                        </div>
                    </li>
                    :
                    <li key={props.rowCount + i} className="list-list-item">
                        <div className="field backgroundWhite"></div>
                    </li>
                )
            }
        </ul>
    );
};

export default Row;