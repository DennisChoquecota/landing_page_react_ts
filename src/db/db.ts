// HEADER //
export interface HeaderSocialItem {
  socialRef: string;
  socialIcon: string;
  socialStyle?: string;
}

export interface Header {
  items: HeaderSocialItem[];
  bg: string;
  text: string;
  hoverText: string;
  cellphone: string;
  email: string;
  location: string;
}

export const HEADER: Header = {
  bg: "",
  text: "text-stone-900",
  hoverText:"",
  cellphone:"+51 955 123 456",
  location:"Av. Patricio Meléndez 1234, Distrito de Tacna, Tacna, Perú",
  email:"landing_page@gmail.com",
  items: [
    {socialRef: "https://www.facebook.com/", socialIcon: "fa-facebook-f"},
    {socialRef: "https://www.google.com/", socialIcon: "fa-google-plus-g"},
    {socialRef: "https://x.com/", socialIcon: "fa-x-twitter"},
    {socialRef: "https://www.instagram.com/", socialIcon: "fa-instagram"},
    {socialRef: "https://www.linkedin.com/", socialIcon: "fa-linkedin-in"},
    {socialRef: "https://www.youtube.com/", socialIcon: "fa-youtube"},
  ],
};

// NAVBAR //
export interface NabNav{
    bg: string;
    text: string;
    hover: string;
    img: string;
}

export const NAVBAR:NabNav = {
    bg: "",
    text: "text-pink-400",
    hover: "",
    img: "images/logo-2.png",
}

export const NAVBARADMIN:NabNav = {
    bg: "",
    text: "text-pink-400",
    hover: "",
    img: "images/logo-2.png",
}

// MENU //
export interface MenuAdmin{
    bg: string;
    text: string;
    hover: string;
}

export const MENUADMIN:MenuAdmin = {
    bg: "",
    text: "text-pink-400",
    hover: "",
}


export interface IMenuLinks {
  icon?: string;
  name: string;
  type: "pestaña" | "link";
  active?: boolean;
  children?: IMenuLinks[];
}

export const MENULINKS: IMenuLinks = {
  name: "root",
  type: "pestaña",
  active: true,
  children: [
    {
      name: "src",
      type: "pestaña",
      active: true,
      children: [
        {
          name: "index.tsx",
          type: "link",
          active: true,
        },
        {
          name: "App.tsx",
          type: "link"
        },
        {
          name: "components",
          type: "pestaña",
          children: [
            {
              name: "Header.tsx",
              type: "link"
            },
            {
              name: "Footer.tsx",
              type: "link"
            }
          ]
        }
      ]
    },
    {
      name: "public",
      type: "pestaña",
      children: [
        {
          name: "index.html",
          type: "link"
        },
        {
          name: "favicon.ico",
          type: "link"
        }
      ]
    },
    {
      name: "package.json",
      type: "link"
    },
    {
      name: "tsconfig.json",
      type: "link"
    }
  ]
};

export interface IDirectory {
  name: string;
  type: "directory" | "file";
  children?: IDirectory[];
}

export const FILESYSTEM: IDirectory = {
  name: "root",
  type: "directory",
  children: [
    {
      name: "src",
      type: "directory",
      children: [
        {
          name: "index.tsx",
          type: "file"
        },
        {
          name: "App.tsx",
          type: "file"
        },
        {
          name: "components",
          type: "directory",
          children: [
            {
              name: "Header.tsx",
              type: "file"
            },
            {
              name: "Footer.tsx",
              type: "file"
            }
          ]
        }
      ]
    },
    {
      name: "public",
      type: "directory",
      children: [
        {
          name: "index.html",
          type: "file"
        },
        {
          name: "favicon.ico",
          type: "file"
        }
      ]
    },
    {
      name: "package.json",
      type: "file"
    },
    {
      name: "tsconfig.json",
      type: "file"
    }
  ]
};


// BANNER //
export interface BannerDataImg {
   backgroundImage: string;
   title: string;
   afterTitle: string;
   text: string;
   ourProTeamCont?: string;
}

export interface BannerData {
   items: BannerDataImg[];
   titleColor: string;
   textColor: string;
   textBtnOne: string;
   textBtnTwo: string;
   bgColorBtnOne:string,
   bgColorBtnTwo:string,
   textBtnColorOne:string,
   textBtnColorTwo:string,
}

export const BANNERDATA: BannerData = {
   titleColor:"",
   textColor:"",
   textBtnOne:"Get A Qutoe",
   textBtnTwo:"Abour Us",
   textBtnColorOne:"",
   textBtnColorTwo:"",
   bgColorBtnOne:"",
   bgColorBtnTwo:"",
   items:[{
      backgroundImage: "url('/images/main-slider/slide3.jpg')",
      title: 'experience the best',
      afterTitle: 'El Primaal',
      text: 'We offer a full range of hairdressing services for men and women, eyebrow and eyelash care, the services of make-up artists and stylists. Entrust your beauty to professionals who really care about...'
   },
   {
      backgroundImage: "url('/images/main-slider/slide4.jpg')",
      title: 'La mejor experiencia',
      afterTitle: 'El Primordial',
      text: 'Ofrecemos una variedad de cortes para dama y caballero, lifting de cejas y pestañas, servicios de artistas maquilladores profesionales. Deje su belleza en manos de profesionales capacitados ...'
   }],
}

// CAROUSEL //
export interface ourProTeamProp {
   optImg: string;
   optName: string;
   optSpecialty: string;
}
export interface carrouselContentProp {
   carrMessage: string;
   carrImg: string;
   carrSubtl: string;
   carrFlat: string;
}
export interface CarouselData {
   backgroundImage: string;
   ourProTeamCont: ourProTeamProp[];
   carrouselContent: carrouselContentProp[];
   titleColor: string;
   iconColor: string;
   icon: string;
   descriptionsColor: string
   title: {
      imgcarousel: string;
      teamcarousel: string;
   };
   text: {
      imgcarousel: string;
      teamcarousel: string;
   };
   descriptions: {
      imgcarousel: string;
      teamcarousel: string;
   };
}

export const CAROUSELDATA: CarouselData = {

   backgroundImage: "url('/images/background/bg1.png'), url('/images/background/bg2.png')",

   ourProTeamCont: [
      { optImg: "images/our-team/pic1.jpg", optName: "Nombre 1", optSpecialty: "Especialidad 1" },
      { optImg: "images/our-team/pic2.jpg", optName: "Nombre 2", optSpecialty: "Especialidad 2" },
      { optImg: "images/our-team/pic3.jpg", optName: "Nombre 3", optSpecialty: "Especialidad 3" },
      { optImg: "images/our-team/pic4.jpg", optName: "Nombre 4", optSpecialty: "Especialidad 4" },
      { optImg: "images/our-team/pic5.jpg", optName: "Nombre 5", optSpecialty: "Especialidad 5" },
   ],

   carrouselContent: [
      { carrMessage: "aqui va 1", carrImg: "images/our-services/pic1.jpg", carrSubtl: "Mensaje 1", carrFlat: "flaticon-lotus" },
      { carrMessage: "aqui va 2", carrImg: "images/our-services/pic2.jpg", carrSubtl: "Mensaje 2", carrFlat: "flaticon-candle-1" },
      { carrMessage: "aqui va 3", carrImg: "images/our-services/pic3.jpg", carrSubtl: "Mensaje 3", carrFlat: "flaticon-woman-1" },
      { carrMessage: "aqui va 4", carrImg: "images/our-services/pic4.jpg", carrSubtl: "Mensaje 4", carrFlat: "flaticon-candle" },
      { carrMessage: "aqui va 4", carrImg: "images/our-services/pic4.jpg", carrSubtl: "Mensaje 4", carrFlat: "flaticon-candle" },
   ],

   titleColor:"",
   icon:"flaticon-spa",
   iconColor:"",
   descriptionsColor:"",
   title: {
      imgcarousel: "Nuestros Servicios",
      teamcarousel: "Our Professional Team",
   },

   text: {
      imgcarousel: "Our Seraaaaavices",
      teamcarousel: "Our Proaaasrqwr123123fessional Team",
   },
   
   
   descriptions: {
      imgcarousel: "Services 12412 services Lorem Ipsum is simply dummy text of the printing and typesetting.",
      teamcarousel: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.",
   },

}

// IMG CAROUSEL //
export interface ImgCarousel{
    iconColor: string;
    borderColorImg: string;
    bgIcon: string;
    subtitle: string;
    message: string;
}

export const IMGCAROUSEL:ImgCarousel = {
    iconColor: "",
    borderColorImg: "",
    bgIcon: "",
    subtitle: "",
    message: "",
}

// SERVICES CAROUSEL //
export interface CardData {
   cardflat: string;
   cardSubtitle: string;
   cardMessage: string;
}
export interface ServiceCarousel {
   backgroundImage: string;
   cards: CardData[];
}

export const SERVICECAROUSEL: ServiceCarousel = {
   backgroundImage: "url('/images/background/bg5.jpg')",
   cards: [
      { cardflat: "flaticon-woman", cardSubtitle: "Subtitulo 1", cardMessage: "Mensaje 1" },
      { cardflat: "flaticon-mortar", cardSubtitle: "Subtitulo 2", cardMessage: "Mensaje 2" },
      { cardflat: "flaticon-candle", cardSubtitle: "Subtitulo 3", cardMessage: "Mensaje 3" },
      { cardflat: "flaticon-sauna-1", cardSubtitle: "Subtitulo 4", cardMessage: "Mensaje 4" },
   ]
}

// CARD OF SERVICES CAROUSEL //
export interface Card{
    bg: string;
    colorIcon: string;
    subtitle: string;
    message: string;
}

export const CARD:Card = {
    bg: "",
    colorIcon: "",
    subtitle: "",
    message: "",
}


//  Portafolio  //
export interface PortfolioImage {
   image: string;
   thumb: string;
   src: string;
   title: string;
}

export interface PortfolioItem {
   filter: string;
   name: string;
   images: PortfolioImage[];
}

export interface PortFolioData {
   backgroundImage: string;
   title: string;
   titleColor: string;
   icon: string;
   iconColor: string;
   text: string;
   textColor: string;
   items: PortfolioItem[];
}

export const PORTFOLIODATA: PortFolioData = {
   backgroundImage: "url('/images/background/bg6.jpg')",
   title: "PortaFolio",
   titleColor: "",
   icon: "flaticon-spa",
   iconColor: "",
   text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.",
   textColor: "",
   items:[{
      filter: "image-1",
      name: "name1",
      images: [
         {
            image: "images/gallery/middle/image-1.jpg",
            thumb: "images/gallery/middle/thumb/pic1.jpg",
            src: "images/gallery/image-1.jpg",
            title: "Serenity Spa",
         },
         {
            image: "images/gallery/middle/image-2.jpg",
            thumb: "images/gallery/middle/thumb/pic2.jpg",
            src: "images/gallery/image-2.jpg",
            title: "Tranquil Touch",
         },
      ],
   },
   {
      filter: "image-3",
      name: "name2",
      images: [
         {
            image: "images/gallery/middle/image-4.jpg",
            thumb: "images/gallery/middle/thumb/pic3.jpg",
            src: "images/gallery/image-3.jpg",
            title: "Back massage",
         },
         {
            image: "images/gallery/middle/image-5.jpg",
            thumb: "images/gallery/middle/thumb/pic5.jpg",
            src: "images/gallery/image-5.jpg",
            title: "Blissful Bodyworks",
         },
      ],
   },
]
};

// VIDEO PRESENTATION //
export interface Video{
    title: string;
    titleColor: string;
    text: string;
    textColor: string;
}

export const VIDEO:Video = {
    title: "Video Presentation",
    titleColor: "",
    text: "In this video, our staff members tell about their work at Solari, how they achieve the best results for their clients every day and more. Click the Play button below to watch this presentation.",
    textColor: "",
}

// OUR PROFESIONAL TEAM //
export interface ProTeam{
    title: string;
    titleColor: string;
    text: string;
    textColor: string;
}

export const PROTEAM:ProTeam = {
    title: "Video Presentation",
    titleColor: "",
    text: "In this video, our staff members tell about their work at Solari, how they achieve the best results for their clients every day and more. Click the Play button below to watch this presentation.",
    textColor: "",
}

//  FOOTER  //
export interface CarouselFoot {
   carrImg: string;
   carrRef: string;
}

export const CAROUSELFOOT: CarouselFoot[] = [
   { carrImg: "images/gallery/thumb/pic1.jpg", carrRef: "images/gallery/pic1.jpg" },
   { carrImg: "images/gallery/thumb/pic2.jpg", carrRef: "images/gallery/pic2.jpg" },
   { carrImg: "images/gallery/thumb/pic3.jpg", carrRef: "images/gallery/pic3.jpg" },
   { carrImg: "images/gallery/thumb/pic4.jpg", carrRef: "images/gallery/pic4.jpg" },
   { carrImg: "images/gallery/thumb/pic5.jpg", carrRef: "images/gallery/pic5.jpg" },
   { carrImg: "images/gallery/thumb/pic6.jpg", carrRef: "images/gallery/pic6.jpg" },
   { carrImg: "images/gallery/thumb/pic7.jpg", carrRef: "images/gallery/pic7.jpg" },
   { carrImg: "images/gallery/thumb/pic8.jpg", carrRef: "images/gallery/pic8.jpg" },
   { carrImg: "images/gallery/thumb/pic8.jpg", carrRef: "images/gallery/pic1.jpg" },
   { carrImg: "images/gallery/thumb/pic8.jpg", carrRef: "images/gallery/pic1.jpg" },
   { carrImg: "images/gallery/thumb/pic8.jpg", carrRef: "images/gallery/pic1.jpg" },
]

export interface FootItems{
   socialRef: string;
   socialIcon: string;
   socialStyle: string;
}
export interface FootData{
   backgroundImage:string;
   textColor:string;
   subTitleEnd:string;
   textEnd:string;
   socialItems:FootItems[];
}
export const FOOTDATA : FootData = {
   backgroundImage: "url('/images/background/bg8.jpg')",
   textColor:"",
   subTitleEnd:"Suscribete para nuevos productos y ofertas",
   textEnd:"Suscríbete para recibir nuestros últimos productos y noticias. Contáctanos si tienes alguna pregunta.",
   socialItems:[
      { socialRef: "https://www.facebook.com/", socialIcon: "fa-facebook-f", socialStyle: "bg-[#1877F2] hover:bg-[#166FE5] text-white" },
      { socialRef: "https://www.google.com/", socialIcon: "fa-google-plus-g", socialStyle: "bg-[#DB4437] hover:bg-[#C33D2E] text-white" },
      { socialRef: "https://x.com/", socialIcon: "fa-x-twitter", socialStyle: "bg-black hover:bg-[#333] text-white", },
      { socialRef: "https://www.instagram.com/", socialIcon: "fa-instagram", socialStyle: "bg-gradient-to-t from-[#feda75] via-[#d62976] to-[#4f5bd5] text-white hover:opacity-90" },
      { socialRef: "https://www.linkedin.com/", socialIcon: "fa-linkedin-in", socialStyle: "bg-[#0077B5] hover:bg-[#006699] text-white" },
      { socialRef: "https://www.youtube.com/", socialIcon: "fa-youtube", socialStyle: "bg-[#FF0000] hover:bg-[#CC0000] text-white" },
   ],
}