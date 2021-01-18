type Image = {
  name: string,
  height: string,
  width: string
}

export type Studio = {
  name: string,
  link: string,
  linkLabel?: string,
  city: string,
  country: string,
  visited: string,
  images: Image[][]
}

const studios: Studio[] = [
  {
    name: 'Somewhere Else',
    link: 'https://somewhere-else.co/',
    city: 'Singapore',
    country: 'Singapore',
    visited: '7. Sept. 2015',
    images: [
      [
        { name: '_DSC0021.JPG', width: '4608', height: '3072' },
        { name: '_DSC0033.JPG', width: '4608', height: '3072' },
        { name: 'DSCF2441.jpg', width: '3264', height: '4896' },
        { name: 'DSCF2439.JPG', width: '3264', height: '4896' },
      ],
      [
        { name: 'DSCF2438.JPG', width: '4896', height: '3264' },
        { name: '_DSC0003.jpg', width: '3072', height: '4608' },
        { name: '_DSC0005.jpg', width: '3072', height: '4608' },
        { name: 'DSCF2443.JPG', width: '4896', height: '3264' }

      ]
    ]
  },
  {
    name: 'The Pressroom',
    link: 'http://www.thepressroom.com.sg/',
    city: 'Singapore',
    country: 'Singapore',
    visited: '8. Sept. 2015',
    images: [
      [
        { name: 'DSCF2457.JPG', width: '4896', height: '3264' },
        { name: '_DSC0771.JPG', width: '4898', height: '3265' },
        { name: '_DSC0774.JPG', width: '3265', height: '4898' }
      ],
      [
        { name: '_DSC0806.JPG', width: '4898', height: '3265' },
        { name: 'DSCF2444.JPG', width: '4896', height: '3264' },
        { name: 'DSCF2453.JPG', width: '4896', height: '3264' },
        { name: '_DSC0788.JPG', width: '3265', height: '4898' }
      ],
      [
        { name: '_DSC0791.JPG', width: '4898', height: '3265' },
        { name: '_DSC0811.JPG', width: '4898', height: '3265' },
        { name: '_DSC0815.JPG', width: '4898', height: '3265' },
        { name: '_DSC0803.JPG', width: '3265', height: '4898' }
      ]
    ]
  },
  {
    name: 'Factory 1611',
    link: 'https://factory1611.com/',
    city: 'Singapore',
    country: 'Singapore',
    visited: '8. Sept. 2015',
    images: [
      [
        { name: '_DSC0751.JPG', width: '4898', height: '3265' },
        { name: '_DSC0741.JPG', width: '4898', height: '3265' },
        { name: '_DSC0761.JPG', width: '4898', height: '3265' }
      ],
      [
        { name: '_DSC0762.JPG', width: '4898', height: '3265' },
        { name: '_DSC0719.JPG', width: '4898', height: '3265' },
        { name: '_DSC0764.JPG', width: '3265', height: '4898' },
      ],
      [
        { name: '_DSC0763.JPG', width: '4898', height: '3265' },
        { name: '_DSC0765(1).jpg', width: '4898', height: '3265' },
        { name: '_DSC0766.JPG', width: '4898', height: '3265' },
      ]
    ]
  },
  {
    name: 'Ayslum',
    link: 'http://theasylum.com.sg/',
    city: 'Singapore',
    country: 'Singapore',
    visited: '9. Sept. 2015',
    images: [
      [
        { name: '_DSF3298.JPG', width: '4896', height: '3264' },
        { name: 'noname.jpg', width: '4896', height: '3264' },
        { name: 'DSCF2480.JPG', width: '3264', height: '4896' },
        { name: '_DSF3290.JPG', width: '3264', height: '4896' },
      ],
      [
        { name: '_DSF3296.JPG', width: '4896', height: '3264' },
        { name: '_DSF3309.JPG', width: '4896', height: '3264' },
        { name: '_DSF3310.JPG', width: '4896', height: '3264' },
      ],
    ]
  },
  {
    name: 'qu’est-ce que c’est design',
    link: 'https://www.behance.net/questcequecest',
    city: 'Singapore',
    country: 'Singapore',
    visited: '9. Sept. 2015',
    images: [
      [
        { name: '_DSF3370.JPG', width: '4896', height: '3264' },
        { name: '_DSF3339.JPG', width: '4896', height: '3264' },
        { name: '_DSF3365.JPG', width: '3264', height: '4896' },
        { name: '_DSF3371.JPG', width: '3264', height: '4896' },
      ],
      [
        { name: '_DSF3373.JPG', width: '4896', height: '3264' },
        { name: '_DSF3354.JPG', width: '4896', height: '3264' },
        { name: '_DSF3379.JPG', width: '4896', height: '3264' },
      ],
    ]
  }
]

export default studios