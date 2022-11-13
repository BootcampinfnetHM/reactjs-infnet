

const productsCart = 
{
  33:{  
        categories: [1],
        nomeProduto: 'Nike Airmax Plus',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam obcaecati, expedita sunt nesciunt, inventore nemo  distinctio?',
        images: [
                'https://cdn.dooca.store/2452/products/dhumzqvrsxkrcsgho93inebnrd84drlzkppj_640x640+fill_ffffff.jpg?v=1658831865&webp=0',

                'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/732/269/products/eb3cb4751-3cdad5a59f3c22061c16432423596054-1024-1024.jpg', 

                'http://cdn.shopify.com/s/files/1/0475/0485/1105/products/fb269acb_1200x1200.jpg?v=1637579820', 

                'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/732/269/products/07b735d31-5cda5e27295447dfad16432423596571-1024-1024.jpg', 
                               
                ],
        price: 534.00,
        promo_price: '',
        percent: 15,
        quantity: 1
    },
    43:{  
        categories: [1],
        nomeProduto: 'Nike Airmax 97',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam obcaecati, expedita sunt nesciunt, inventore nemo  distinctio?',
        images: [
                'https://maze.cdn.plataformaneo.com.br/produto/multifotos/hd/20210914130954_8269991731_DZ.png'
                ,
                'https://maze.cdn.plataformaneo.com.br/produto/multifotos/hd/20210914130958_4344995656_DMZ.png'
                ,
                'https://thedropdate-media.s3.amazonaws.com/uploads/2021/09/Nike-Air-Max-97-DJ0717-001-3.jpg'
                ,
                'https://cms-cdn.thesolesupplier.co.uk/2021/04/nike-air-max-97-purple-bullet-middle_w900.jpg'
                ,
        ],

        price: 407.00,
        promo_price: 350.00,
        percent: 15,
        quantity: 1
    },
  56:{  
        categories: [5],
        nomeProduto: 'Balenciaga Triple S',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam obcaecati, expedita sunt nesciunt, inventore nemo  distinctio?',
        images: [
                'https://cdn-images.farfetch-contents.com/12/96/98/30/12969830_13769318_1000.jpg'
                , 
                'https://cdn-images.farfetch-contents.com/12/96/98/30/12969830_13769325_600.jpg'
                , 
                'https://media.endclothing.com/media/catalog/product/0/7/07-04-2022_AJ_533882-W3CS1-1061_3_1.jpg'
                , 
                'https://image.harrods.com/balenciaga-triple-s-sneakers_14850874_25439803_2048.jpg'
                ,     
        ],
        price: 735.00,
        promo_price: 599.00,
        percent: 15,
        quantity: 1
    },
}

const categories = {
    1: {marca: 'Nike'},
    2: {marca: 'Adidas'},
    3: {marca: 'Puma'},
    4: {marca: 'Off-White'},
    5: {marca: 'balenciaga'},
    6: {marca: 'Gucci'},
    7: {marca: 'Versace'},
    8: {marca: 'Prada'}
}

module.exports = {
    productsCart,
    categories
}

