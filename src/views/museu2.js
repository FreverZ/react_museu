import React from 'react'
import { Helmet } from 'react-helmet'
import SolidButton from '../components/solid-button'
import Hero from '../components/hero'
import Description from '../components/description'
import Contact from '../components/contact'
import Stats from '../components/stats'
import Reviews from '../components/reviews'
import Pricing from '../components/pricing'
import Gallery from '../components/gallery'
import './museu2.css'

const MuseuNacionalAzulejo = (props) => {
  return (
    <div className="museu-nacional-azulejo-container">
      <Helmet>
        <title>Museu Nacional do Azulejo - Travel Agency</title>
        <meta property="og:title" content="Museu Nacional do Azulejo - Travel Agency" />
      </Helmet>
      <nav data-role="Header" className="museu-nacional-azulejo-navbar">
        <h1 className="museu-nacional-azulejo-logo">Museus de Portugal</h1>
        <div className="museu-nacional-azulejo-container1">
          <div className="museu-nacional-azulejo-right-side">
            <div className="museu-nacional-azulejo-links-container">
              <span className="museu-nacional-azulejo-text"><a href="/home" className="landing-page-link">Home</a></span>
              <span className="museu-nacional-azulejo-text"><a href="/about-us" className="landing-page-link">Sobre Nós</a></span>
              <span className="museu-nacional-azulejo-text"><a href="/contact" className="landing-page-link">Contactos</a></span>
            </div>
            <a href="/login" className="landing-page-link">
              <SolidButton
                button="Login"
                rootClassName="solid-button-root-class-name2"
              ></SolidButton>
            </a>
            <a href="/register" className="landing-page-link">
              <SolidButton
                button="Registar"
                rootClassName="solid-button-root-class-name3"
              ></SolidButton>
            </a>
          </div>
        </div>
      </nav>
      <Hero
        action1="Explore"
        content1="Descubra a beleza e a história do azulejo no Museu Nacional do Azulejo, onde séculos de arte decorativa aguardam por você."
        heading1="Museu Nacional do Azulejo"
        image1Src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Museu_Nacional_do_Azulejo.jpg"
      ></Hero>
      <Gallery
        image1Src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/d9/6e/0e/photo0jpg.jpg?w=1100&h=-1&s=1"
        image2Src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/1d/dc/e0/caption.jpg?w=1100&h=-1&s=1"
        image3Src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/1d/dc/df/caption.jpg?w=1200&h=-1&s=1"
      />
      <Description
        date1="26/07/1965"
        title1="Descrição"
        content1="O Museu Nacional do Azulejo, fundado em 1965, é dedicado a uma das expressões artísticas mais distintivas de Portugal - o azulejo. Localizado no antigo Convento da Madre de Deus, em Lisboa, o museu apresenta uma impressionante coleção que traça a evolução do azulejo desde os seus primeiros dias até os tempos modernos. Entre as obras-primas em exibição, destaca-se o Grande Panorama de Lisboa, uma peça monumental que retrata a cidade antes do terremoto de 1755. O museu também oferece uma variedade de serviços para enriquecer a visita: uma loja com lembranças exclusivas, um café com vista para um belo jardim, e acesso a wi-fi gratuito."
        card1Heading="História do Museu"
        card1Content="Fundado em 1965, o Museu Nacional do Azulejo está localizado no Convento da Madre de Deus, um edifício de grande valor histórico e arquitetônico. O museu oferece um panorama abrangente da arte do azulejo em Portugal, com peças que datam do século XV até os dias atuais."
        card4Heading="Exposições Notáveis"
        card4Content="O Museu Nacional do Azulejo abriga algumas das mais impressionantes obras de azulejaria do mundo. Destacam-se painéis que representam cenas históricas e religiosas, além de obras contemporâneas que exploram novas abordagens na arte dos azulejos."
      ></Description>
      <Contact
  rootClassName="contact-root-class-name2"
  location2GoogleMap={<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.6841509057394!2d-9.118409910463534!3d38.72505998405396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1933e8da53a15f%3A0xb31d6f4a8645bc28!2sMuseu%20Nacional%20do%20Azulejo!5e0!3m2!1spt-PT!2spt!4v1718057759443!5m2!1spt-PT!2spt" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>}
/>
      <Stats
        stat1="4.7☆"
        stat2="4321"
        stat3="20.000 a 30.000"
        heading1="Estatísticas do Museu"
        stat1Description="Rating"
        stat2Description="Nº Reviews"
        stat3Description="Nº Visitas p/ Mês"
      ></Stats>
      <Reviews
        rootClassName="reviews-root-class-name2"
        heading1="Avaliações de Clientes"
        author1Name="Pedro Simões"
        author1Position="Turista"
        review1="Crazy, Gostava de Poder Levar para o bairro onde moro."
        author1Src={"https://cdn.vox-cdn.com/thumbor/Yo0ovVqdXciSCoTYBXCZMCp_zUw=/0x0:1200x675/1200x800/filters:focal(356x204:548x396)/cdn.vox-cdn.com/uploads/chorus_image/image/66952368/38_SD_10232007jg_0606.0.jpg"}
        author2="Maksym Yavoreknko"
        author2Position="Artista"
        review2="A coleção de azulejos é incrível, uma verdadeira viagem no tempo e na arte."
        author2Src={"https://phantom-marca.unidadeditorial.es/2cba88a7dc30f1d04a090ef8e0692de5/resize/660/f/webp/assets/multimedia/imagenes/2024/01/04/17043791992413.jpg"}       
        author3="Mario Macedo"
        author3Position="Historiador"
        review3="O Museu Nacional do Azulejo é um tesouro nacional. As exposições são bem organizadas e informativas."
        author3Src={"https://cdn.discordapp.com/attachments/1096105379454271550/1249847470989770772/Captura_de_ecra_2024-06-10_230700.png?ex=6668caaa&is=6667792a&hm=0807c0ef9b3f52ee69f4cd286584648eba76126d0e049f84632a278e2771d3bb&"}      
      />

      <Pricing
        imageSrc1="/logo_255-200h.png"
        heading1="Preços de Visita"
        content1="Escolha o tipo de entrada que melhor se adequa à sua visita."
        plan1="Ingresso Individual"
        plan1Price="€10"
        plan1Detail="Entrada válida por um dia"
        plan1Action="Comprar Agora"
        plan1Feature1="Acesso a todas as exposições"
        plan1Feature2="Guias de áudio disponíveis"
        plan1Feature3="Experiência interativa"
        plan1Feature4="Descontos na loja do museu"
        plan1Feature5="Reserva online disponível"
      />
      <div className="museu-nacional-azulejo-footer">
        <div className="museu-nacional-azulejo-menu">
          <h1>
            <span>Museus de</span>
            <br></br>
            <span>Portugal</span>
            <br></br>
          </h1>
          <div className="museu-nacional-azulejo-links-container2">
            <div className="museu-nacional-azulejo-container2">
              <a
                href="/home"
                target="_blank"
                rel="noreferrer noopener"
                className="museu-nacional-azulejo-link03"
              >
                Pacotes de Tour
              </a>
              <a
                href="/home"
                target="_blank"
                rel="noreferrer noopener"
                className="museu-nacional-azulejo-link04"
              >
                Ofertas Especializadas
              </a>
              <a
                href="/home"
                target="_blank"
                rel="noreferrer noopener"
                className="museu-nacional-azulejo-link05"
              >
                <span className="museu-nacional-azulejo-text12">Promoções</span>
                <br></br>
              </a>
            </div>
            <div className="museu-nacional-azulejo-container3">
              <a
                href="/home"
                target="_blank"
                rel="noreferrer noopener"
                className="museu-nacional-azulejo-link06"
              >
                Sobre Nós
              </a>
              <a
                href="/home"
                target="_blank"
                rel="noreferrer noopener"
                className="museu-nacional-azulejo-link07"
              >
                FAQ
              </a>
              <a
                href="/home"
                target="_blank"
                rel="noreferrer noopener"
                className="museu-nacional-azulejo-link08"
              >
                Termos e Condições
              </a>
              <a
                href="/home"
                target="_blank"
                rel="noreferrer noopener"
                className="museu-nacional-azulejo-link09"
              >
                Contacta-nos
              </a>
            </div>
          </div>
          <div className="museu-nacional-azulejo-follow-container1">
            <span className="museu-nacional-azulejo-text14">Segue-nos</span>
            <div className="museu-nacional-azulejo-icons-container1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className="museu-nacional-azulejo-link10"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="museu-nacional-azulejo-icon11"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer noopener"
                className="museu-nacional-azulejo-link11"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="museu-nacional-azulejo-icon13"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="museu-nacional-azulejo-link12"
              >
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="museu-nacional-azulejo-icon15"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MuseuNacionalAzulejo
