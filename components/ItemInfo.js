import React from 'react'

import './ItemInfo.css'
import { IMAGE, TEXT, RECTANGLE } from '../constants/types'

// TODO: display item info
const ItemInfo = ({ item, updateSelectedItem, cardId }) => {
  const onChange = (e, item) => {
    updateSelectedItem(cardId, { ...item, [e.target.name]: e.target.value })
  }

  const renderImage = (item) => (
    <ul>
      <li>Id: {item.id}</li>
      <li>Type: {item.type}</li>
      <li>
        Position:
        <ul>
          <li>x: {item.pos.x}</li>
          <li>y: {item.pos.y}</li>
        </ul>
      </li>
      <li>
        Size:
        <ul>
          <li>width: {item.size.w}</li>
          <li>height: {item.size.h}</li>
        </ul>
      </li>
      <li>
        Rot:{' '}
        <input
          type='number'
          name='rot'
          value={item.rot}
          onChange={(e) => onChange(e, item)}
        />
      </li>
      <li>Src: {item.src}</li>
      <li>Alt: {item.alt}</li>
    </ul>
  )

  const renderRectangle = (item) => (
    <ul>
      <li>Id: {item.id}</li>
      <li>Type: {item.type}</li>
      <li>
        Position:
        <ul>
          <li>x: {item.pos.x}</li>
          <li>y: {item.pos.y}</li>
        </ul>
      </li>
      <li>
        Size:
        <ul>
          <li>width: {item.size.w}</li>
          <li>height: {item.size.h}</li>
        </ul>
      </li>
      <li>
        Rot:{' '}
        <input
          type='number'
          name='rot'
          value={item.rot}
          onChange={(e) => onChange(e, item)}
        />
      </li>
      <li>
        Color:{' '}
        <input
          type='color'
          name='color'
          value={item.color}
          onChange={(e) => onChange(e, item)}
        />
      </li>
      <li>
        Border:{' '}
        <input
          type='number'
          name='border'
          value={item.border}
          onChange={(e) => onChange(e, item)}
        />
      </li>
      <li>
        BorderColor:{' '}
        <input
          type='color'
          name='borderColor'
          value={item.borderColor}
          onChange={(e) => onChange(e, item)}
        />
      </li>
    </ul>
  )

  const renderText = (item) => (
    <ul>
      <li>Id: {item.id}</li>
      <li>Type: {item.type}</li>
      <li>
        Position:
        <ul>
          <li>x: {item.pos.x}</li>
          <li>y: {item.pos.y}</li>
        </ul>
      </li>
      <li>
        Size:
        <ul>
          <li>width: {item.size.w}</li>
          <li>height: {item.size.h}</li>
        </ul>
      </li>
      <li>
        Color:{' '}
        <input
          type='color'
          name='color'
          value={item.color}
          onChange={(e) => onChange(e, item)}
        />
      </li>
      <li>FontFamily: {item.fontFamily}</li>
      <li>
        Rot:{' '}
        <input
          type='number'
          name='rot'
          value={item.rot}
          onChange={(e) => onChange(e, item)}
        />
      </li>
      <li>
        FontSize:{' '}
        <input
          type='number'
          name='fontSize'
          value={item.fontSize}
          onChange={(e) => onChange(e, item)}
        />
      </li>
      <li>
        Content:{' '}
        <input
          type='text'
          name='content'
          maxLength='20'
          value={item.content}
          onChange={(e) => onChange(e, item)}
        />
      </li>
    </ul>
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

  return <div>{renderItem(item)}</div>
}

export default ItemInfo
