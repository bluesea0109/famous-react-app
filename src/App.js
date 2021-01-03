import React from 'react'
import './App.css'

import Card from '../components/Card'
import ItemInfo from '../components/ItemInfo'

import { getCards, getCardItems, updateCardItem } from '../api/cardApiWrapper'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentCard: null,
      currentItem: null,
      cardsLength: 0,
      cardIndex: 0,
    }
  }

  async componentDidMount() {
    this.cards = await getCards()
    const currentCard = this.cards && this.cards.length && this.cards[0]
    const currentItem =
      currentCard.items && currentCard.items.length && currentCard.items[0]
    const cardsLength = this.cards.length

    this.setState({ currentCard, currentItem, cardsLength })
  }

  updateSelectedItem = (cardId, item) => {
    updateCardItem(cardId, item)

    this.setState({ currentItem: item })
  }

  handleSelectItem = (index) => {
    if (index === undefined || null) return null
    const { currentCard } = this.state

    const currentItem =
      currentCard.items && currentCard.items.length && currentCard.items[index]

    this.setState({ currentItem })
  }

  handleSelectCard = (index) => {
    const currentCard = this.cards && this.cards.length && this.cards[index]
    const currentItem =
      currentCard.items && currentCard.items.length && currentCard.items[0]

    this.setState({ currentCard, currentItem, cardIndex: index })
  }

  render() {
    const { cardIndex, cardsLength } = this.state
    if (!this.state.currentCard) return <div>No Cards</div>

    const name = this.state.currentCard.name
    const { h, w } = this.state.currentCard.size
    return (
      <div className='container'>
        <div className='app-container'>
          <div className='card-container'>
            <h2 className='card-header'>Card</h2>
            <Card
              name={name}
              height={h}
              width={w}
              items={this.state.currentCard.items}
              handleSelectItem={this.handleSelectItem}
            />
          </div>
          <div className='item-info-container'>
            <h2 className='item-info-header'>Card Item Info</h2>
            <ItemInfo
              cardId={this.state.currentCard.id}
              item={this.state.currentItem}
              updateSelectedItem={this.updateSelectedItem}
            />
          </div>
        </div>

        <div className='btn-group'>
          <button
            className='btn'
            type='button'
            onClick={() => this.handleSelectCard(this.state.cardIndex - 1)}
            disabled={cardIndex === 0 ? true : false}
          >
            Previous Card
          </button>
          <button
            className='btn'
            type='button'
            onClick={() => this.handleSelectCard(this.state.cardIndex + 1)}
            disabled={cardIndex === cardsLength - 1 ? true : false}
          >
            Next Card
          </button>
        </div>
      </div>
    )
  }
}

export default App
