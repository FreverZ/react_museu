import React from 'react'

import { Helmet } from 'react-helmet'

import SolidButton from '../components/solid-button'
import Hero from '../components/hero'
import Description from '../components/description'
import Contact from '../components/contact'
import Stats from '../components/stats'
import Reviews from '../components/reviews'
import Pricing from '../components/pricing'
import './museu2.css'

const Museu2 = (props) => {
  return (
    <div className="museu2-container">
      <Helmet>
        <title>Museu2 - Travel Agency1</title>
        <meta property="og:title" content="Museu2 - Travel Agency1" />
      </Helmet>
      <nav data-role="Header" className="museu2-navbar">
        <h1 className="museu2-logo">Museus de Portugal</h1>
        <div className="museu2-container1">
          <div className="museu2-right-side">
            <div className="museu2-links-container">
              <span className="museu2-text">Home</span>
              <span className="museu2-text01">Sobre Nós</span>
              <span className="museu2-text02">Contactos</span>
            </div>
            <SolidButton
              button="Login"
              rootClassName="solid-button-root-class-name2"
            ></SolidButton>
            <SolidButton
              button="Registar"
              rootClassName="solid-button-root-class-name3"
            ></SolidButton>
          </div>
        </div>
        <div data-role="BurgerMenu" className="museu2-burger-menu">
          <svg viewBox="0 0 1024 1024" className="museu2-burger-menu1">
            <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
          </svg>
        </div>
        <div data-role="MobileMenu" className="museu2-mobile-menu">
          <div className="museu2-nav">
            <div className="museu2-top">
              <h1>Travel</h1>
              <div data-role="CloseMobileMenu" className="museu2-close-menu">
                <svg viewBox="0 0 1024 1024" className="museu2-icon03">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="museu2-right-side1">
              <div className="museu2-links-container1">
                <span className="museu2-text03">Home</span>
                <span className="museu2-text04">About</span>
                <span className="museu2-text05">Tour Packages</span>
                <span>Contact</span>
              </div>
              <SolidButton button="Explore places"></SolidButton>
            </div>
          </div>
          <div className="museu2-follow-container">
            <span className="museu2-text07">
              Follow us on
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <div className="museu2-icons-container">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className="museu2-link"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="museu2-icon05"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer noopener"
                className="museu2-link01"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="museu2-icon07"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="museu2-link02"
              >
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="museu2-icon09"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <Hero
        action1="f"
        content1="Explora a riqueza da arte mundial no Museu Calouste Gulbenkian, onde seis mil obras aguardam para encantar seus sentidos."
        heading1="Museu Calouste Gulbenkian"
        image1Src="/calouste-gulbenkian-museum-1500w.jpg"
      ></Hero>
      <Description
        date1="02/10/1969"
        title1="Descrição"
        content1="Uma coleção que inclui mais de seis mil obras adquiridas em vida por Calouste Sarkis Gulbenkian, desde Arte Egípcia, Greco-Romana, Islâmica, do Extremo Oriente, Numismática, Pintura, Escultura e Artes Decorativas Europeias. Obras de grandes mestres como Rubens, Rembrandt, Turner, Degas e o maior conjunto de joias de René Lalique são alguns exemplos do que pode encontrar numa das melhores coleções privadas do mundo. Além da Coleção do Fundador, o Museu Calouste Gulbenkian tem também uma Coleção Moderna, a maior e mais completa coleção de arte moderna e contemporânea portuguesa. O Museu Calouste Gulbenkian está localizado num dos mais emblemáticos jardins modernos portugueses, aberto ao público todo o ano. O Museu tem disponível uma ampla variedade de serviços para melhorar a sua visita: três cafetarias com vista para o Jardim, a Loja do Museu onde pode encontrar todo o tipo de artigos e lembranças relacionadas com as Coleções e Exposições, um serviço de bengaleiro gratuito e Wi-Fi."
        card1Heading="Abertura do museu"
      ></Description>
      <Contact rootClassName="contact-root-class-name"></Contact>
      <Stats
        stat1="4.5☆"
        stat2="8651"
        heading1="Avaliações"
        stat1Description="Rating"
        stat2Description="Nº Reviews"
        stat3Description="Nº Visitas p/ Mês"
      ></Stats>
      <Reviews rootClassName="reviews-root-class-name"></Reviews>
      <Pricing imageSrc1="/logo_255-200h.png"></Pricing>
      <div className="museu2-footer">
        <div className="museu2-menu">
          <h1>
            <span>Museus de</span>
            <br></br>
            <span>Portugal</span>
            <br></br>
          </h1>
          <div className="museu2-links-container2">
            <div className="museu2-container2">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="museu2-link03"
              >
                Pacotes de Tour
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="museu2-link04"
              >
                Ofertas Especializadas
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="museu2-link05"
              >
                <span className="museu2-text12">Promoções</span>
                <br></br>
              </a>
            </div>
            <div className="museu2-container3">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="museu2-link06"
              >
                Sobre Nós
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="museu2-link07"
              >
                FAQ
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="museu2-link08"
              >
                Termos e Condições
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="museu2-link09"
              >
                Contacta-nos
              </a>
            </div>
          </div>
          <div className="museu2-follow-container1">
            <span className="museu2-text14">Segue-nos</span>
            <div className="museu2-icons-container1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className="museu2-link10"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="museu2-icon11"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer noopener"
                className="museu2-link11"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="museu2-icon13"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="museu2-link12"
              >
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="museu2-icon15"
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

export default Museu2
