import { AlanWake, CallOfDuty, DeadIsland, FarCray, FIFA, FourthBg, Game, Guardian, MarketPlace, microsoft, play, PlayStation, primaryBg, PrinceOfPersia, SaintsRow, SecondBg, steam, TestimonialOne, TestimonialTwo, ThirdBg, xbox } from "../assets/Images/Image";

export const Images = [
    {src:primaryBg}, 
    {src:SecondBg},
    {src:ThirdBg},
    {src:FourthBg}
];
export const Brands = [
    {src:steam},
    {src:microsoft},
    {src:xbox},
    {src:PlayStation},
    {src:play}
];

export interface Card{
    ImgUrl:string
    title:string
    text:string
}

export const Cards:Card[] = [
    {ImgUrl:Game, title:'Video Game Suppliers',text:'List of carefully selected, verified, high quality suppliers in different regions worldwide.'},
    {ImgUrl:MarketPlace, title:'Wholesale Marketplace', text:'Find wholesale prices and suppliers of video games, consoles, and game accessories.'},
    // {ImgUrl:Rocket, title:'Future Releases', text:'Release dates and information on upcoming or recently released video games.'}
]
export interface NavLink{
  name:string,
  href:string
}

export const navLinks:NavLink[] = [
    {name:'Home', href:'/'},
    {name:'About', href:'/About'},
    {name:'Privacy Policy', href:'/privacy-policy'},
    {name:'Our Shop', href:'/shop'}
];

export interface HeroContent{
    title:string,
    buttonText:string
}
export const heroContent:HeroContent[] = [
    {title:"Connecting Players & Games in an Immersive environment.", buttonText:'Become a Member for Free!'}
]

export interface Platforms{
    name:string
}

export const platforms:Platforms[] = [
    {name:'All'},
    {name:'PS5'},
    {name:'PS4'},
    {name:'Xbox'}
]

export interface GameCardProps{
    title:string
    company:string
    platform:string
    image:string
    rating:number
    order:string
    price:string
}

export const games:GameCardProps[] = [
    {
    title:'Call of Duty: Vanguard',
    company:'Activision',
    platform:'PS5',
    image:CallOfDuty,
    rating:4.8,
    order:'175 orders',
    price:'$59.99'
    },
    {
     title:'FIFA 22',
     company:'Activision',
     platform:'PS5',
     image:FIFA,
     rating:4.7,
     order:'170 orders',
     price:'$49.99'
    },
    {
     title:'GOFTG',
     company:'Activision',
     platform:'PS5',
     image:Guardian,
     rating:4.2,
     order:'180 orders',
     price:'$59.99'
    },
    {
        title:'Alan Awake',
        company:'Activision',
        platform:'PS5',
        image:AlanWake,
        rating:4.1,
        order:'166 orders',
        price:'$61.19'
    },
    {
        title:'Far Cry 6',
        company:'Activision',
        platform:'PS5',
        image:FarCray,
        rating:4.6,
        order:'190 orders',
        price:'$71.99'
    },
    {
        title:'Prince of Persia',
        company:'Activision',
        platform:'PS4',
        image:PrinceOfPersia,
        rating:4.8,
        order:'200 orders',
        price:'$80.00'
    },
    {
        title:'Dead Island 2',
        company:'Activision',
        platform:'PS4',
        image:DeadIsland,
        rating:4.3,
        order:'150 orders',
        price:'$71.21'
    },
    {
        title:'Saint Row',
        company:'Activision',
        platform:'PS5',
        image:SaintsRow,
        rating:3.9,
        order:'110 orders',
        price:'$45.67'
    },
];

export interface Testimonial{
    text:string
    image:string
    name:string
    profession:string
}

export const Testimonials:Testimonial[] = [
    {text:'My neighbor has one of these. She works as a gardener and she says its really awesome.', name:'Charles Boyle',profession:'Graphic Designer',image:TestimonialTwo},
    {text:"One of my hobbies is gaming. and when i'm hiking this works great. Medley is ghetto.", name:'Mary Smith',profession:'3D Animator',image:TestimonialOne},
]


export const footerLinks = [
  {
    title:'Services',
    links:[
      {name:'Our Stores'},
      {name:'Campaigns'},
      {name:'Tournaments'},
      {name:'Offline'}
    ]
  },
  {
    title:'About',
    links:[
        {name:'Our Story'},
        {name:'Benefits'},
        {name:'Team'},
        {name:'Careers'}
    ]
  },
  {
    title:'Help',
    links:[
        {name:'FAQs'},
        {name:'Contact Us'},
        {name:'Email :- Little@gmail.com'},
        {name:'Phone :- +251 902-231-1111'}
    ]
  }
]