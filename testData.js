const TestData = {
  cardList: [
    {
      id: 1,
      name: 'Welcome!',
      pos: {
        x: 100,
        y: 100,
      },
      size: {
        w: 300,
        h: 500,
      },
      items: [
        {
          id: 1,
          type: 'image',
          pos: {
            x: 10,
            y: 10,
          },
          size: {
            w: 100,
            h: 200,
          },
          rot: 0,
          src: 'https://example.com/images/first.png',
          alt: 'First Image',
        },
        {
          id: 2,
          type: 'rectangle',
          pos: {
            x: 30,
            y: 150,
          },
          size: {
            w: 50,
            h: 100,
          },
          rot: 0,
          color: '#ff0012',
          border: 3,
          borderColor: '#a01200',
        },
        {
          id: 3,
          type: 'text',
          pos: {
            x: 80,
            y: 300,
          },
          size: {
            w: 150,
            h: 20,
          },
          rot: 0,
          color: '#ff0012',
          fontFamily: 'Verdana',
          fontSize: 12,
          content: 'Hello World!',
        },
      ],
    },
    {
      id: 2,
      name: 'Blank',
      pos: {
        x: 400,
        y: 100,
      },
      size: {
        w: 200,
        h: 600,
      },
      items: [],
    },
    {
      id: 3,
      name: 'Just Text',
      pos: {
        x: 400,
        y: 100,
      },
      size: {
        w: 200,
        h: 600,
      },
      items: [
        {
          id: 1,
          type: 'text',
          pos: {
            x: 60,
            y: 100,
          },
          size: {
            w: 100,
            h: 100,
          },
          rot: 0,
          color: '#0000ff',
          fontFamily: 'Verdana',
          fontSize: 22,
          content: 'Card 3',
        },
      ],
    },
  ],
}

export default TestData
