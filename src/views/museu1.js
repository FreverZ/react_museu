import React from 'react'

import { Helmet } from 'react-helmet'

import SolidButton from '../components/solid-button'
import Hero from '../components/hero'
import Description from '../components/description'
import Contact from '../components/contact'
import Stats from '../components/stats'
import Reviews from '../components/reviews'
import Pricing from '../components/pricing'
import './museu1.css'
import Gallery from '../components/gallery'

const Museu1 = (props) => {
  return (
    <div className="museu1-container">
      <Helmet>
        <title>Museu1 - Travel Agency1</title>
        <meta property="og:title" content="Museu1 - Travel Agency1" />
      </Helmet>
      <nav data-role="Header" className="museu1-navbar">
        <h1 className="museu1-logo">Museus de Portugal</h1>
        <div className="museu1-container1">
          <div className="museu1-right-side">
            <div className="museu1-links-container">
              <span className="museu1-text"><a href="/home" className="landing-page-link">Home</a></span>
              <span className="museu1-text"><a href="/not-found" className="landing-page-link">Sobre Nós</a></span>
              <span className="museu1-text"><a href="/not-found" className="landing-page-link">Contactos</a></span>
            </div>
            <a href="/login" className="landing-page-link">
              <SolidButton
                button="Login"
                rootClassName="solid-button-root-class-name1"
              ></SolidButton>
            </a>
            <a href="/register" className="landing-page-link">
              <SolidButton
                button="Registar"
                rootClassName="solid-button-root-class-name"
              ></SolidButton>
            </a>
          </div>
        </div>
      </nav>
      <Hero
        action1="f"
        content1="Explora a riqueza da arte mundial no Museu Calouste Gulbenkian, onde seis mil obras aguardam para encantar seus sentidos."
        heading1="Museu Calouste Gulbenkian"
      ></Hero>
      <Gallery
        image1Src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5d/3e/cb/calouste-gulbenkian-museum.jpg?w=1200&h=-1&s=1"
        image2Src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5d/3e/8d/calouste-gulbenkian-museum.jpg?w=1200&h=-1&s=1"
        image3Src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5d/3e/16/calouste-gulbenkian-museum.jpg?w=1200&h=-1&s=1"
        />
      <Description
        date1="02/10/1969"
        title1="Descrição"
        content1="Uma coleção que inclui mais de seis mil obras adquiridas em vida por Calouste Sarkis Gulbenkian, desde Arte Egípcia, Greco-Romana, Islâmica, do Extremo Oriente, Numismática, Pintura, Escultura e Artes Decorativas Europeias. Obras de grandes mestres como Rubens, Rembrandt, Turner, Degas e o maior conjunto de joias de René Lalique são alguns exemplos do que pode encontrar numa das melhores coleções privadas do mundo. Além da Coleção do Fundador, o Museu Calouste Gulbenkian tem também uma Coleção Moderna, a maior e mais completa coleção de arte moderna e contemporânea portuguesa. O Museu Calouste Gulbenkian está localizado num dos mais emblemáticos jardins modernos portugueses, aberto ao público todo o ano. O Museu tem disponível uma ampla variedade de serviços para melhorar a sua visita: três cafetarias com vista para o Jardim, a Loja do Museu onde pode encontrar todo o tipo de artigos e lembranças relacionadas com as Coleções e Exposições, um serviço de bengaleiro gratuito e Wi-Fi."
        card1Heading="Abertura do museu"
        card1Content="O Museu Calouste Gulbenkian, localizado em Lisboa, Portugal, é um tesouro cultural que abre suas portas para os visitantes desde 2 de outubro de 1969. Fundado com base na coleção pessoal do magnata do petróleo e filantropo Calouste Sarkis Gulbenkian, o museu abriga uma das mais impressionantes e ecléticas coleções de arte do mundo."
        card4Heading="Obras de arte"
        card4Content="O Museu Calouste Gulbenkian é um dos museus mais importantes de Portugal e abriga uma coleção de mais de seis mil obras de arte. A coleção inclui arte egípcia, greco-romana, islâmica, do Extremo Oriente, numismática, pintura, escultura e artes decorativas europeias. O museu também possui uma coleção moderna de arte portuguesa, que é a maior e mais completa do país."
      ></Description>
      <Contact rootClassName="contact-root-class-name1"></Contact>
      <Stats
        stat1="4.5☆"
        stat2="8651"
        stat3="50.000 a 100.000"
        heading1="Estatísticas do Museu"
        stat1Description="Rating"
        stat2Description="Nº Reviews"
        stat3Description="Nº Visitas p/ Mês"
      ></Stats>
      <Reviews
        rootClassName="reviews-root-class-name1"
        heading1="Avaliações de Clientes"
        author1Name="João Silva"
        author1Position="Viajante"
        review1="Excelente experiência! Recomendo vivamente este museu a todos os amantes da arte."
        author2="Maria Santos"
        author2Position="Turista"
        review2="Uma visita obrigatória para quem está em Lisboa. Adorei cada momento no museu."
        author3="Pedro Oliveira"
        author3Position="Historiador de Arte"
        review3="Um acervo incrível e uma organização impecável. Sem dúvida, um dos melhores museus que já visitei."
      />
      <Pricing
        imageSrc1="/logo_255-200h.png"
        heading1="Preços de Visita"
        content1="Escolha o tipo de entrada que melhor se adequa à sua visita."
        plan1="Ingresso Individual"
        plan1Price="€15"
        plan1Detail="Entrada válida por um dia"
        plan1Action="Comprar Agora"
        plan1Feature1="Acesso a todas as exposições"
        plan1Feature2="Guias de áudio disponíveis"
        plan1Feature3="Experiência interativa"
        plan1Feature4="Descontos em lojas do museu"
        plan1Feature5="Reserva online disponível"
      />
      <div className="museu1-footer">
        <div className="museu1-menu">
          <h1>
            <span>Museus de</span>
            <br></br>
            <span>Portugal</span>
            <br></br>
          </h1>
          <div className="museu1-links-container2">
            <div className="museu1-container2">
              <a href="/home"
                target="_blank"
                rel="noreferrer noopener"
                className="museu1-link03">Pacotes de Tour</a>
              <a href="/home"
                target="_blank"
                rel="noreferrer noopener"
                className="museu1-link04">Ofertas Especializadas</a>
              <a href="/home"
                target="_blank"
                rel="noreferrer noopener"
                className="museu1-link05">
                <span className="museu1-text12">Promoções</span>
                <br></br>
              </a>
            </div>
            <div className="museu1-container3">
              <a href="/home"
                target="_blank"
                rel="noreferrer noopener"
                className="museu1-link06">Sobre Nós</a>
              <a href="/home"
                target="_blank"
                rel="noreferrer noopener"
                className="museu1-link07">FAQ</a>
              <a href="/home"
                target="_blank"
                rel="noreferrer noopener"
                className="museu1-link08">Termos e Condições</a>
              <a href="/home"
                target="_blank"
                rel="noreferrer noopener"
                className="museu1-link09">Contacta-nos</a>
            </div>
          </div>
          <div className="museu1-follow-container1">
            <span className="museu1-text14">Segue-nos</span>
            <div className="museu1-icons-container1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className="museu1-link10"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="museu1-icon11"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer noopener"
                className="museu1-link11"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="museu1-icon13"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="museu1-link12"
              >
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="museu1-icon15"
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

export default Museu1
