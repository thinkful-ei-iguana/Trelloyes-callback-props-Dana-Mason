import React from 'react';
import Card from './Card'
import './List.css';

export default function List(props) {
  console.log(props.cards);
  return (
    <section className='List'>
      <header className='List-header'>
        <h2>{props.header}</h2>
      </header>
      <div className='List-cards'>
        {props.cards.map((card) =>
          <Card
            title={card.title}
            key={card.id}
            cardId={card.id}
            listId={props.listId}
            
            content={card.content}
            deleteCard={props.deleteCard}

          />
        )}
        <button
          type='button'
          className='List-add-button'
          onClick={(e)=>props.AddRandomCard(props.listId)}
        >
          + Add Random Card
        </button>
      </div>
    </section>
  )
}
