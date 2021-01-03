import TestData from '../testData'

// Mock API functions
export async function getCards() {
  return new Promise((resolve, reject) => resolve(TestData.cardList))
}

export async function getCardItems(id) {
  const card = TestData.cardList.find((card) => card.id === id)
  if (!card) return null
  return new Promise((resolve, reject) => resolve(card.items))
}

export async function updateCardItem(cardId, itemContent) {
  const card = TestData.cardList.find((card) => card.id === cardId)
  if (!card || !card.items) return null

  const index = card.items.findIndex((item) => item.id === itemContent.id)
  if (index === -1) return null

  card.items[index] = itemContent

  console.log('itemContent updated with ', JSON.stringify(itemContent))

  return new Promise((resolve, reject) => resolve(itemContent))
}
