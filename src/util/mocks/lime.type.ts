export default {
  itemType: 'application/vnd.lime.document-select+json',
  items: [
    {
      header: {
        type: 'application/vnd.lime.media-link+json',
        value: {
          title: 'Title',
          text: 'This is a first item',
          type: 'image/jpeg',
          uri: 'http://www.isharearena.com/wp-content/uploads/2012/12/wallpaper-281049.jpg',
        },
      },
      options: [
        {
          label: {
            type: 'application/vnd.lime.web-link+json',
            value: {
              title: 'Link',
              uri: 'http://www.adoteumgatinho.org.br/',
            },
          },
        },
        {
          label: {
            type: 'text/plain',
            value: 'Text 1',
          },
          value: {
            type: 'application/json',
            value: {
              key1: 'value1',
              key2: 2,
            },
          },
        },
      ],
    },
    {
      header: {
        type: 'application/vnd.lime.media-link+json',
        value: {
          title: 'Title 2',
          text: 'This is another item',
          type: 'image/jpeg',
          uri: 'http://www.freedigitalphotos.net/images/img/homepage/87357.jpg',
        },
      },
      options: [
        {
          label: {
            type: 'application/vnd.lime.web-link+json',
            value: {
              title: 'Second link',
              text: 'Weblink',
              uri: 'https://pt.dreamstime.com/foto-de-stock-brinquedo-pl%C3%A1stico-amarelo-do-pato-image44982058',
            },
          },
        },
        {
          label: {
            type: 'text/plain',
            value: 'Second text',
          },
          value: {
            type: 'application/json',
            value: {
              key3: 'value3',
              key4: 4,
            },
          },
        },
        {
          label: {
            type: 'text/plain',
            value: 'More one text',
          },
          value: {
            type: 'application/json',
            value: {
              key5: 'value5',
              key6: 6,
            },
          },
        },
      ],
    },
  ],
};
