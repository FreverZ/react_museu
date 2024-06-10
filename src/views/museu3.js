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
import './museu3.css'

const Museu3 = (props) => {
  return (
    <div className="museu3-container">
      <Helmet>
        <title>Museu Arqueológico do Carmo - Travel Agency</title>
        <meta property="og:title" content="Museu Arqueológico do Carmo - Travel Agency" />
      </Helmet>
      <nav data-role="Header" className="museu3-navbar">
        <h1 className="museu3-logo">Museus de Portugal</h1>
        <div className="museu3-container1">
          <div className="museu3-right-side">
            <div className="museu3-links-container">
              <span className="museu3-text"><a href="/home" className="landing-page-link">Home</a></span>
              <span className="museu3-text"><a href="/about-us" className="landing-page-link">Sobre Nós</a></span>
              <span className="museu3-text"><a href="/contact" className="landing-page-link">Contactos</a></span>
            </div>
            <a href="/login" className="landing-page-link">
              <SolidButton
                button="Login"
                rootClassName="solid-button-root-class-name8"
              ></SolidButton>
            </a>
            <a href="/register" className="landing-page-link">
              <SolidButton
                button="Registar"
                rootClassName="solid-button-root-class-name9"
              ></SolidButton>
            </a>
          </div>
        </div>
        <div data-role="BurgerMenu" className="museu3-burger-menu">
          <svg viewBox="0 0 1024 1024" className="museu3-burger-menu1">
            <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
          </svg>
        </div>
        <div data-role="MobileMenu" className="museu3-mobile-menu">
          <div className="museu3-nav">
            <div className="museu3-top">
              <h1>Travel</h1>
              <div data-role="CloseMobileMenu" className="museu3-close-menu">
                <svg viewBox="0 0 1024 1024" className="museu3-icon03">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="museu3-right-side1">
              <div className="museu3-links-container1">
                <span className="museu3-text03">Home</span>
                <span className="museu3-text04">Sobre Nós</span>
                <span className="museu3-text05">Pacotes de Turismo</span>
                <span>Contactos</span>
              </div>
              <SolidButton button="Explorar lugares"></SolidButton>
            </div>
          </div>
          <div className="museu3-follow-container">
            <span className="museu3-text07">
              Siga-nos em
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <div className="museu3-icons-container">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className="museu3-link"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="museu3-icon05"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer noopener"
                className="museu3-link01"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="museu3-icon07"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="museu3-link02"
              >
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="museu3-icon09"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <Hero
        action1="Explore"
        content1="Descubra a história fascinante de Lisboa no Museu Arqueológico do Carmo, situado nas ruínas do Convento do Carmo."
        heading1="Museu Arqueológico do Carmo"
        image1Src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Carmo_Convent_Lisbon.jpg"
      ></Hero>
      <Gallery
        image1Src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/7b/80/15/carmo-archaeological.jpg?w=1100&h=-1&s=1"
        image2Src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/7b/7f/fc/carmo-archaeological.jpg?w=1200&h=-1&s=1"
        image3Src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/7b/7f/ef/carmo-archaeological.jpg?w=1200&h=-1&s=1"
      />
      <Description
        date1="1864"
        title1="Descrição"
        content1="O Museu Arqueológico do Carmo está localizado nas ruínas do Convento do Carmo em Lisboa. Fundado em 1864, o museu exibe uma impressionante coleção de artefatos arqueológicos que datam desde a pré-história até a época contemporânea. Entre as suas atrações mais notáveis estão os túmulos góticos, esculturas medievais, e uma coleção de múmias sul-americanas. Além disso, o museu oferece uma vista fascinante das ruínas do convento, que foi parcialmente destruído pelo terremoto de 1755."
        card1Heading="História do Museu"
        card1Content="Fundado em 1864, o Museu Arqueológico do Carmo está localizado nas ruínas do Convento do Carmo, um dos marcos históricos mais importantes de Lisboa. O convento foi destruído pelo terremoto de 1755 e as ruínas permanecem como um poderoso testemunho desse evento devastador."
        card4Heading="Coleções Notáveis"
        card4Content="O museu abriga uma variedade de coleções arqueológicas, incluindo túmulos góticos, esculturas medievais, cerâmicas romanas e múmias sul-americanas. As ruínas do convento proporcionam um cenário único para estas exposições, oferecendo aos visitantes uma experiência verdadeiramente inesquecível."
      ></Description>
      <Contact
        rootClassName="contact-root-class-name2"
        location3GoogleMap={<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6226.057090745014!2d-9.145124602907648!3d38.71715360817238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19347f372ec63f%3A0x32d7f56592e02cef!2sMuseu%20Arqueol%C3%B3gico%20do%20Carmo!5e0!3m2!1spt-PT!2spt!4v1718060021324!5m2!1spt-PT!2spt" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>}
      />
      <Stats
        stat1="4.8☆"
        stat2="5432"
        stat3="15.000 a 25.000"
        heading1="Estatísticas do Museu"
        stat1Description="Rating"
        stat2Description="Nº Reviews"
        stat3Description="Nº Visitas p/ Mês"
      ></Stats>
      <Reviews
        rootClassName="reviews-root-class-name2"
        heading1="Avaliações de Clientes"
        author1Name="Carlos Ferreira"
        author1Position="Historiador"
        review1="Uma viagem incrível pela história de Lisboa e Portugal. O cenário das ruínas é impressionante."
        author2Name="Ana Lopes"
        author2Position="Turista"
        review2="Adorei a visita! As coleções são fascinantes e as ruínas são um espetáculo à parte."
        author3Name="Miguel Sousa"
        author3Position="Arqueólogo"
        review3="Um dos melhores museus arqueológicos que já visitei. A combinação de artefatos históricos e o cenário das ruínas é única."
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
      <div className="museu3-footer">
        <div className="museu3-menu">
          <h1>
            <span>Museus de</span>
            <br></br>
            <span>Portugal</span>
            <br></br>
          </h1>
          <div className="museu3-links-container2">
            <div className="museu3-container2">
              <span className="museu3-text01"><a href="/about-us" className="landing-page-link">Sobre Nós</a></span>
              <span className="museu3-text02"><a href="/contact" className="landing-page-link">Contactos</a></span>
            </div>
            <div className="museu3-social-links-container">
              <a href="https://instagram.com" target="_blank" rel="noreferrer noopener" className="museu3-link03">
                <svg viewBox="0 0 877.7142857142857 1024" className="museu3-icon11">
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer noopener" className="museu3-link04">
                <svg viewBox="0 0 602.2582857142856 1024" className="museu3-icon13">
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer noopener" className="museu3-link05">
                <svg viewBox="0 0 950.8571428571428 1024" className="museu3-icon15">
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

export default Museu3
