import React from 'react'

import './CardItem.css'
import { IMAGE, TEXT, RECTANGLE } from '../constants/types'

const CardItem = ({
  item,
  index,
  handleSelectItem,
  handleUpdateId,
  selectedItemId,
}) => {
  const renderImage = (item) => (
    <img
      src={`${item.src}`}
      alt={`${item.alt}`}
      style={{
        position: 'absolute',
        left: item.pos.x,
        top: item.pos.y,
        width: item.size.w,
        height: item.size.h,
        transform: `rotate(${item.rot}deg)`,
        filter: selectedItemId === item.id ? 'invert(50%)' : '',
      }}
    />
  )

  const renderRectangle = (item) => (
    <div
      style={{
        position: 'absolute',
        left: item.pos.x,
        top: item.pos.y,
        width: item.size.w,
        height: item.size.h,
        transform: `rotate(${item.rot}deg)`,
        backgroundColor: item.color,
        border: `${item.border}px solid ${item.borderColor}`,
        filter: selectedItemId === item.id ? 'invert(50%)' : '',
      }}
    ></div>
  )

  const renderText = (item) => (
    <div
      style={{
        position: 'absolute',
        left: item.pos.x,
        top: item.pos.y,
        width: item.size.w,
        height: item.size.h,
        color: item.color,
        fontFamily: item.fontFamily,
        fontSize: Number(item.fontSize),
        transform: `rotate(${item.rot}deg)`,
        filter: selectedItemId === item.id ? 'invert(50%)' : '',
        backgroundColor: item.content === '' ? 'gray' : '',
      }}
    >
      {item.content}
    </div>
  )

  const renderItem = (item) => {
    switch (item.type) {
      case IMAGE:
        return renderImage(item)

      case RECTANGLE:
        return renderRectangle(item)

      case TEXT:
        return renderText(item)

      default:
        return <div></div>
    }
  }

  return (
    <div
      className='item'
      key={item.id}
      onClick={() => {
        handleSelectItem(index)
        handleUpdateId(item.id)
      }}
    >
      {renderItem(item)}
    </div>
  )
}

export default CardItem
