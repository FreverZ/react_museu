import React from 'react'

import { Helmet } from 'react-helmet'

import SolidButton from '../components/solid-button'
import PlaceCard from '../components/place-card'
import './landing-page.css'

const LandingPage = (props) => {
  return (
    <div className="landing-page-container">
      <Helmet>
        <title>Travel Agency1</title>
        <meta property="og:title" content="Travel Agency1" />
      </Helmet>
      <div className="landing-page-top-container">
        <nav data-role="Header" className="landing-page-navbar">
          <h1 className="landing-page-logo">Museus de Portugal</h1>
          <div className="landing-page-container1">
            <div className="landing-page-right-side">
              <div className="landing-page-links-container">
                <span className="landing-page-text">Home</span>
                <span className="landing-page-text01">Sobre Nós</span>
                <span className="landing-page-text02">Contactos</span>
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
        <div className="landing-page-hero">
          <div className="landing-page-content-container">
            <h1 className="landing-page-text08">
              <span className="Heading landing-page-text09">Descubra Museus</span>
              <br></br>
            </h1>
            <h2 className="landing-page-subheading">
              <span className="Subheading landing-page-text11">Explorando Culturas e Histórias pelo Mundo</span>
              <br></br>
            </h2>
            <span className="landing-page-text13">
              <span>Inspire-se. Aprenda. Viva a Arte.</span>
              <br></br>
            </span>
            <SolidButton button="Explorar"></SolidButton>
          </div>
        </div>
      </div>
      <div id="main-section" className="landing-page-main">
        <h1>Os mais conhecidos</h1>
        <span className="landing-page-text17">Recomendado</span>
        <div className="landing-page-cards-container">
          <PlaceCard
            city="Museu Calouste Gulbenkian"
            image="/calouste-gulbenkian-museum-300h.jpg"
            description="Explora a riqueza da arte mundial no Museu Calouste Gulbenkian, onde seis mil obras aguardam para encantar seus sentidos."
          ></PlaceCard>
          <PlaceCard
            city="Museu Nacional do Azulejo"
            image="/museu-azulejo-300w.jpg"
            description="Descubra a história do azulejo no Museu do Azulejo, desde suas origens muçulmanas até hoje, em uma visita cativante e educativa."
          ></PlaceCard>
          <PlaceCard
            city="Universidade de Coimbra"
            image="/biblioteca-joanina-foto-300h.jpg"
            description="Visitar a universidade é obrigatório para quem vai a Coimbra.  Coração da cidade, merece uma visita ao pátio da faculdade de direito, a reitoria, biblioteca Juliana e Ver a vista da cidade da que ponto."
          ></PlaceCard>
          <PlaceCard
            city="Museu Serralves"
            image="/casa-de-serralves-300h.jpg"
            description="A Fundação de Serralves é uma instituição cultural com uma visão contemporânea da Arte e da Paisagem, sendo considerada uma das instituições culturais de referência em Portugal e a mais relevante do norte do país."
          ></PlaceCard>
          <PlaceCard
            city="Igreja de São Roque"
            image="/igreja-de-sao-roque-300h.jpg"
            description="A incrível beleza do lugar. Impressionante. Por fora é uma igreja simples, nada especial, mas seu interior te deixa realmente impactado com tanta riqueza e beleza."
          ></PlaceCard>
          <PlaceCard
            city="Museu Arqueológico do Carmo"
            image="/carmo-archaeological-300h.jpg"
            description="A Igreja do Carmo, fundada em 1389 por D. Nuno Álvares Pereira, rivalizava com a Sé de Lisboa e o Convento de São Francisco, tornando-se um ícone nacional associado ao famoso herói medieval."
          ></PlaceCard>
        </div>
      </div>
      <div className="landing-page-footer">
        <div className="landing-page-menu">
          <h1>
            <span>Museus de</span>
            <br></br>
            <span>Portugal</span>
            <br></br>
          </h1>
          <div className="landing-page-links-container2">
            <div className="landing-page-container2">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link05"
              >
                Pacotes de Tour
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link06"
              >
                Ofertas Especializadas
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link07"
              >
                <span className="landing-page-text22">Promoções</span>
                <br></br>
              </a>
            </div>
            <div className="landing-page-container3">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link08"
              >
                Sobre Nós
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link09"
              >
                FAQ
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link10"
              >
                Termos e Condições
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link11"
              >
                Contacta-nos
              </a>
            </div>
          </div>
          <div className="landing-page-follow-container1">
            <span className="landing-page-text24">Segue-nos</span>
            <div className="landing-page-icons-container1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link12"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="landing-page-icon11"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link13"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="landing-page-icon13"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link14"
              >
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="landing-page-icon15"
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

export default LandingPage
