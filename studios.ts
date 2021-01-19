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
        { name: '_DSC0021.jpg', width: '4608', height: '3072' },
        { name: '_DSC0033.jpg', width: '4608', height: '3072' },
        { name: 'DSCF2441.jpg', width: '3264', height: '4896' },
        { name: 'DSCF2439.jpg', width: '3264', height: '4896' },
      ],
      [
        { name: 'DSCF2438.jpg', width: '4896', height: '3264' },
        { name: '_DSC0003.jpg', width: '3072', height: '4608' },
        { name: '_DSC0005.jpg', width: '3072', height: '4608' },
        { name: 'DSCF2443.jpg', width: '4896', height: '3264' }

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
        { name: 'DSCF2457.jpg', width: '4896', height: '3264' },
        { name: '_DSC0771.jpg', width: '4898', height: '3265' },
        { name: '_DSC0774.jpg', width: '3265', height: '4898' }
      ],
      [
        { name: '_DSC0806.jpg', width: '4898', height: '3265' },
        { name: 'DSCF2444.jpg', width: '4896', height: '3264' },
        { name: 'DSCF2453.jpg', width: '4896', height: '3264' },
        { name: '_DSC0788.jpg', width: '3265', height: '4898' }
      ],
      [
        { name: '_DSC0791.jpg', width: '4898', height: '3265' },
        { name: '_DSC0811.jpg', width: '4898', height: '3265' },
        { name: '_DSC0815.jpg', width: '4898', height: '3265' },
        { name: '_DSC0803.jpg', width: '3265', height: '4898' }
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
        { name: '_DSC0751.jpg', width: '4898', height: '3265' },
        { name: '_DSC0741.jpg', width: '4898', height: '3265' },
        { name: '_DSC0761.jpg', width: '4898', height: '3265' }
      ],
      [
        { name: '_DSC0762.jpg', width: '4898', height: '3265' },
        { name: '_DSC0719.jpg', width: '4898', height: '3265' },
        { name: '_DSC0764.jpg', width: '3265', height: '4898' },
      ],
      [
        { name: '_DSC0763.jpg', width: '4898', height: '3265' },
        { name: '_DSC0765(1).jpg', width: '4898', height: '3265' },
        { name: '_DSC0766.jpg', width: '4898', height: '3265' },
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
        { name: '_DSF3298.jpg', width: '4896', height: '3264' },
        { name: 'noname.jpg', width: '4896', height: '3264' },
        { name: 'DSCF2480.jpg', width: '3264', height: '4896' },
        { name: '_DSF3290.jpg', width: '3264', height: '4896' },
      ],
      [
        { name: '_DSF3296.jpg', width: '4896', height: '3264' },
        { name: '_DSF3309.jpg', width: '4896', height: '3264' },
        { name: '_DSF3310.jpg', width: '4896', height: '3264' },
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
        { name: '_DSF3370.jpg', width: '4896', height: '3264' },
        { name: '_DSF3339.jpg', width: '4896', height: '3264' },
        { name: '_DSF3365.jpg', width: '3264', height: '4896' },
        { name: '_DSF3371.jpg', width: '3264', height: '4896' },
      ],
      [
        { name: '_DSF3373.jpg', width: '4896', height: '3264' },
        { name: '_DSF3354.jpg', width: '4896', height: '3264' },
        { name: '_DSF3379.jpg', width: '4896', height: '3264' },
      ],
    ]
  },
  {
    name: 'Knuckles & Notch',
    link: 'http://knucklesandnotch.com/',
    city: 'Singapore',
    country: 'Singapore',
    visited: '10. Sept. 2015',
    images: [
      [
        { name: 'IMG_1682.jpg', width: '4898', height: '3265' },
        { name: 'IMG_1736.jpg', width: '4898', height: '3265' },
        { name: 'IMG_1738.jpg', width: '4898', height: '3265' }
      ],
      [
        { name: 'IMG_1745.jpg', width: '3265', height: '4898' },
        { name: 'IMG_1746.jpg', width: '4898', height: '3265' },
        { name: 'IMG_1767 2.jpg', width: '4898', height: '3265' }
      ],
    ]
  },
  {
    name: 'Flag & Mountains',
    link: 'https://flagandmountains.com/',
    city: 'Singapore',
    country: 'Singapore',
    visited: '10. Sept. 2015',
    images: [
      [
        { name: 'P9100123.jpg', width: '4898', height: '3265' },
        { name: 'IMG_1772.jpg', width: '4898', height: '3265' },
        { name: 'IMG_1785.jpg', width: '4898', height: '3265' },
      ],
      [
        { name: 'IMG_1798.jpg', width: '4898', height: '3265' },
        { name: 'IMG_1790.jpg', width: '4898', height: '3265' },
        { name: 'IMG_1786.jpg', width: '4898', height: '3265' },
      ],
      [
        { name: 'IMG_1787.jpg', width: '4898', height: '3265' },
        { name: 'IMG_1781.jpg', width: '4898', height: '3265' },
        { name: 'IMG_1836.jpg', width: '4898', height: '3265' },
      ],
    ]
  },
  {
    name: 'Do Not Design',
    link: 'http://donotdesign.com/v3/',
    city: 'Singapore',
    country: 'Singapore',
    visited: '11. Sept. 2015',
    images: [
      [
        { name: '_DSF3402.jpg', width: '4896', height: '3264' },
        { name: '_DSF3404.jpg', width: '3264', height: '4896' },
        { name: '_DSF3406.jpg', width: '4896', height: '3264' },
      ],
      [
        { name: '_DSF3410.jpg', width: '3264', height: '4896' },
        { name: '_DSF3416.jpg', width: '3264', height: '4896' },
        { name: '_DSF3421.jpg', width: '4896', height: '3264' },
        { name: '_DSF3425.jpg', width: '3264', height: '4896' },
      ],
    ]
  },
  {
    name: 'gyro',
    link: 'https://www.gyro.com/',
    city: 'Singapore',
    country: 'Singapore',
    visited: '14. Sept. 2015',
    images: [
      [
        { name: 'IMG_1848.jpg', width: '4898', height: '3265' },
        { name: 'IMG_1858.jpg', width: '4898', height: '3265' },
        { name: 'IMG_1867.jpg', width: '4898', height: '3265' },
      ],
      [
        { name: 'IMG_1879.jpg', width: '4898', height: '3265' },
        { name: 'IMG_1885.jpg', width: '4898', height: '3265' },
        { name: 'IMG_1880.jpg', width: '4898', height: '3265' },
      ],
      [
        { name: 'IMG_1892.jpg', width: '4898', height: '3265' },
        { name: 'IMG_1904.jpg', width: '4898', height: '3265' },
        { name: 'IMG_1922.jpg', width: '4898', height: '3265' },
      ],
    ]
  },
  {
    name: 'Some Early Birds',
    link: 'https://someearlybirds.com/',
    city: 'Kuala Lumpur',
    country: 'Malaysia',
    visited: '17. Sept. 2015',
    images: [
      [
        { name: 'DSCF4579.jpg', width: '4896', height: '3264' },
        { name: 'DSCF4580.jpg', width: '4896', height: '3264' },
        { name: 'DSCF4582.jpg', width: '4896', height: '3264' },
      ],
      [
        { name: 'DSCF4585.jpg', width: '4896', height: '3264' },
        { name: 'DSCF4595.jpg', width: '4896', height: '3264' },
        { name: 'DSCF4597.jpg', width: '4896', height: '3264' },
      ],
    ]
  },
  {
    name: 'LIE',
    link: 'http://wearenotlie.com/',
    city: 'Kuala Lumpur',
    country: 'Malaysia',
    visited: '17. Sept. 2015',
    images: [
      [
        { name: 'DSCF4472.jpg', width: '4896', height: '3264' },
        { name: 'DSCF4475.jpg', width: '3264', height: '4896' },
        { name: 'DSCF4476.jpg', width: '3264', height: '4896' },
        { name: 'DSCF4481.jpg', width: '4896', height: '3264' },
      ],
      [
        { name: 'DSCF4537.jpg', width: '4896', height: '3264' },
        { name: 'DSCF4568.jpg', width: '4896', height: '3264' },
        { name: 'DSCF4540.jpg', width: '4896', height: '3264' },
      ],
      [
        { name: 'DSCF4562.jpg', width: '4896', height: '3264' },
        { name: 'DSCF4527.jpg', width: '4896', height: '3264' },
        { name: 'DSCF4575.jpg', width: '4896', height: '3264' },
      ],
    ]
  },
  {
    name: 'Tsubaki',
    link: 'http://tsubakistudio.net/v2/',
    city: 'Kuala Lumpur',
    country: 'Malaysia',
    visited: '17. Sept. 2015',
    images: [
      [
        { name: 'DSCF4659.jpg', width: '4896', height: '3264' },
        { name: 'DSCF4612.jpg', width: '4896', height: '3264' },
        { name: 'DSCF4622.jpg', width: '4896', height: '3264' },
      ],
      [
        { name: 'DSCF4631.jpg', width: '4896', height: '3264' },
        { name: 'DSCF4629.jpg', width: '4896', height: '3264' },
        { name: 'DSCF4639.jpg', width: '4896', height: '3264' },
      ],
      [
        { name: 'DSCF4648.jpg', width: '4896', height: '3264' },
        { name: 'DSCF4608.jpg', width: '4896', height: '3264' },
        { name: 'DSCF4666.jpg', width: '3264', height: '4896' },
      ],
    ]
  },
  {
    name: 'Conscious',
    link: 'http://www.conscious.co.th/',
    city: 'Bangkok',
    country: 'Thailand',
    visited: '24. Sept. 2015',
    images: [
      [
        { name: 'DSCF4672.jpg', width: '4896', height: '3264' },
        { name: 'DSCF4907.jpg', width: '4896', height: '3264' },
        { name: 'DSCF4677.jpg', width: '3264', height: '4896' },
      ],
      [
        { name: 'DSCF4680.jpg', width: '3264', height: '4896' },
        { name: 'DSCF4683.jpg', width: '4896', height: '3264' },
        { name: 'DSCF4685.jpg', width: '4896', height: '3264' },
      ],
      [
        { name: 'DSCF4692.jpg', width: '4896', height: '3264' },
        { name: 'DSCF4694.jpg', width: '4896', height: '3264' },
      ],
    ]
  },
  {
    name: 'Farmgroup',
    link: 'https://farmgroup.co.th/',
    city: 'Bangkok',
    country: 'Thailand',
    visited: '24. Sept. 2015',
    images: [
      [
        { name: 'DSCF4700.jpg', width: '4896', height: '3264' },
        { name: 'DSCF4699.jpg', width: '4896', height: '3264' },
        { name: 'DSCF4704.jpg', width: '4896', height: '3264' },
      ],
      [
        { name: 'DSCF4730.jpg', width: '4896', height: '3264' },
        { name: 'DSCF4705.jpg', width: '4896', height: '3264' },
        { name: 'DSCF4715.jpg', width: '4896', height: '3264' },
      ],
      [
        { name: 'DSCF4709.jpg', width: '4896', height: '3264' },
        { name: 'DSCF4735.jpg', width: '4896', height: '3264' },
        { name: 'DSCF4721.jpg', width: '4896', height: '3264' },
      ]
    ]
  },
  {
    name: '',
    link: '',
    city: '',
    country: '',
    visited: '',
    images: [
      [
        { name: '_DSF3370.jpg', width: '4896', height: '3264' },
      ],
    ]
  },
  {
    name: '',
    link: '',
    city: '',
    country: '',
    visited: '',
    images: [
      [
        { name: '_DSF3370.jpg', width: '4896', height: '3264' },
      ],
    ]
  },
  {
    name: '',
    link: '',
    city: '',
    country: '',
    visited: '',
    images: [
      [
        { name: '_DSF3370.jpg', width: '4896', height: '3264' },
      ],
    ]
  },
  {
    name: '',
    link: '',
    city: '',
    country: '',
    visited: '',
    images: [
      [
        { name: '_DSF3370.jpg', width: '4896', height: '3264' },
      ],
    ]
  },
  {
    name: '',
    link: '',
    city: '',
    country: '',
    visited: '',
    images: [
      [
        { name: '_DSF3370.jpg', width: '4896', height: '3264' },
      ],
    ]
  },
  {
    name: '',
    link: '',
    city: '',
    country: '',
    visited: '',
    images: [
      [
        { name: '_DSF3370.jpg', width: '4896', height: '3264' },
      ],
    ]
  },
  {
    name: '',
    link: '',
    city: '',
    country: '',
    visited: '',
    images: [
      [
        { name: '_DSF3370.jpg', width: '4896', height: '3264' },
      ],
    ]
  },
]

export default studios