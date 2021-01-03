import React from 'react'

import './Card.css'
import CardItem from './CardItem'

class Card extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedItemId: 1,
    }
  }

  handleUpdateId = (id) => {
    this.setState({ selectedItemId: id })
  }

  renderItems(items) {
    if (!items || !items.length) return null

    const { handleSelectItem } = this.props
    const { selectedItemId } = this.state

    return items.map((item, index) => {
      return (
        <CardItem
          key={index}
          item={item}
          index={index}
          selectedItemId={selectedItemId}
          handleSelectItem={handleSelectItem}
          handleUpdateId={this.handleUpdateId}
        />
      )
    })
  }

  render() {
    const { name, height, width, x, y, items } = this.props
    const renderedItems = this.renderItems(items)
    const nameStyle = {
      position: 'absolute',
      left: 100,
      top: 175,
    }
    const cardStyle = {
      border: '1px solid black',
      position: 'absolute',
      width,
      height,
      left: 100,
      top: 200,
    }
    return (
      <div>
        <div style={nameStyle}>Name: {name}</div>
        <div style={cardStyle}>{renderedItems}</div>
      </div>
    )
  }
}

export default Card
