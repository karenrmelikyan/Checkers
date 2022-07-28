import React from 'react';
import {useState} from "react";
import '../style.css'

const DragDrop = () => {

    const [cardList, setCardList] = useState([
        {id: 1, text: 'Card 1'},
        {id: 2, text: 'Card 2'},
        {id: 3, text: 'Card 3'},
        {id: 4, text: 'Card 4'},
    ])

    const [currentCard, setCurrentCard] = useState(null)

    function dragStartHandler(e, grabbedCard) {
        setCurrentCard(grabbedCard)
    }

    function dragLeaveHandler(e) {

    }

    function dragEndHandler(e) {
        e.target.style.background = 'white'
    }

    function dragOverHandler(e) {
        e.preventDefault()
        e.target.style.background = 'lightgray'
    }

    function dropHandler(e, underCard) {
        e.preventDefault()
        setCardList(cardList.map((card) => {
            if (card.id === underCard.id) {
                return {...card, text: currentCard.text}
            }
            if (card.id === currentCard.id) {
                return {...card, text: underCard.text}
            }

            return card;
        }))
    }

    return (
        <div className="app">
            {cardList.map((card) =>
                <div
                    onDragStart={e => dragStartHandler(e, card)}
                    onDragLeave={e => dragLeaveHandler(e)}
                    onDragEnd={e => dragEndHandler(e)}
                    onDragOver={e => dragOverHandler(e)}
                    onDrop={e => dropHandler(e, card)}
                    draggable={true}
                    className={'card'}>
                    {card.text}
                </div>
            )}
        </div>
    );
};

export default DragDrop;