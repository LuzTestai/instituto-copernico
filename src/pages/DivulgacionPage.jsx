import { Link } from 'react-router-dom'

import '../styles/pages/divulgacion.css'


const amautaFeatures = [
  {
    number: '01',
    title: 'Sistema Solar',
    text: 'Un recorrido a escala para comprender las dimensiones y distancias de nuestro sistema planetario.',
  },
  {
    number: '02',
    title: 'Observatorio',
    text: 'Telescopios y actividades de observación para acercarse directamente al cielo.',
  },
  {
    number: '03',
    title: 'Cielo abierto',
    text: 'El paisaje natural convertido en un gran espacio para interpretar estrellas y constelaciones.',
  },
  {
    number: '04',
    title: 'El tiempo',
    text: 'Un reloj solar analemático como herramienta de divulgación, ciencia y experiencia.',
  },
]


const iyaImages = [
  '/images/divulgacion/iya2009/observacion-01.jpg',
  '/images/divulgacion/iya2009/observacion-02.jpg',
  '/images/divulgacion/iya2009/observacion-03.jpg',
  '/images/divulgacion/iya2009/observacion-04.jpg',
  '/images/divulgacion/iya2009/observacion-05.jpg',
]


function DivulgacionPage() {

  return (
    <main className="divulgacion-page">


      {/* ========================================
          HERO
      ======================================== */}

      <section className="divulgacion-hero">

        <div className="divulgacion-hero__overlay" />

        <div className="institutional-container divulgacion-hero__container">

          <div className="divulgacion-hero__content">

            <span className="divulgacion-hero__eyebrow">
              DIVULGACIÓN · EXPERIENCIAS · COMUNIDAD
            </span>

            <h1>
              La astronomía
              <span>para todos.</span>
            </h1>

            <p>
              Acercamos el universo a la comunidad a través
              de experiencias, observaciones, actividades
              educativas y encuentros bajo el cielo.
            </p>

          </div>


          <div className="divulgacion-hero__index">

            <a href="#amauta">

              <span>
                01
              </span>

              <div>
                <strong>
                  Amauta Pacha
                </strong>

                <small>
                  Parque astronómico
                </small>
              </div>

            </a>


            <a href="#turismo">

              <span>
                02
              </span>

              <div>
                <strong>
                  Astronomía para turistas
                </strong>

                <small>
                  Valle Grande
                </small>
              </div>

            </a>


            <a href="#iya2009">

              <span>
                03
              </span>

              <div>
                <strong>
                  Observaciones públicas
                </strong>

                <small>
                  Ciencia para la comunidad
                </small>
              </div>

            </a>

          </div>

        </div>

      </section>



      {/* ========================================
          INTRO
      ======================================== */}

      <section className="divulgacion-intro">

        <div className="institutional-container divulgacion-intro__grid">

          <span className="divulgacion-intro__number">
            01
          </span>


          <div>

            <span className="section-eyebrow">
              NUESTRA MISIÓN
            </span>

            <p>
              Mirar el cielo puede ser el comienzo de una
              pregunta, de una vocación o simplemente de una
              noche inolvidable. La divulgación forma parte
              esencial de la identidad del Instituto Copérnico.
            </p>

          </div>

        </div>

      </section>



      {/* ========================================
          AMAUTA PACHA
      ======================================== */}

      <section
        className="divulgacion-amauta"
        id="amauta"
      >

        <div className="institutional-container">

          <div className="divulgacion-section-heading">

            <div>

              <span className="section-eyebrow">
                01 · AMAUTA PACHA
              </span>

              <h2>
                Tierra de
                <span>la Sabiduría.</span>
              </h2>

            </div>


            <p>
              Un espacio concebido para integrar astronomía,
              naturaleza y conocimiento, transformando el
              paisaje del Cañón del Atuel en una experiencia
              educativa a cielo abierto.
            </p>

          </div>



          <div className="amauta-gallery">

            <figure className="amauta-gallery__main">

              <img
                src="/images/divulgacion/amauta/inauguracion.jpg"
                alt="Inauguración de Amauta Pacha"
              />

              <figcaption>
                Amauta Pacha · Cañón del Atuel
              </figcaption>

            </figure>


            <figure>

              <img
                src="/images/divulgacion/amauta/telescopio.jpg"
                alt="Telescopio en Amauta Pacha"
              />

              <figcaption>
                Observación astronómica
              </figcaption>

            </figure>


            <figure>

              <img
                src="/images/divulgacion/amauta/reloj-solar.jpg"
                alt="Reloj solar analemático"
              />

              <figcaption>
                Reloj solar analemático
              </figcaption>

            </figure>

          </div>



          <div className="amauta-features">

            {amautaFeatures.map((item) => (

              <article
                className="amauta-feature"
                key={item.number}
              >

                <span>
                  {item.number}
                </span>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

              </article>

            ))}

          </div>



          <div className="amauta-detail">

            <div className="amauta-detail__text">

              <span className="section-eyebrow">
                OBSERVAR · COMPRENDER · DESCUBRIR
              </span>

              <h3>
                El universo como experiencia.
              </h3>

              <p>
                Las actividades combinaban interpretación
                del cielo, observación telescópica y recursos
                educativos para descubrir el movimiento de
                los astros y las dimensiones del cosmos.
              </p>

            </div>


            <div className="amauta-detail__images">

              <figure>

                <img
                  src="/images/divulgacion/amauta/saturno.jpg"
                  alt="Saturno observado desde Amauta Pacha"
                />

                <figcaption>
                  Saturno
                </figcaption>

              </figure>


              <figure>

                <img
                  src="/images/divulgacion/amauta/m20.jpg"
                  alt="Nebulosa M20"
                />

                <figcaption>
                  Nebulosa M20
                </figcaption>

              </figure>

            </div>

          </div>

        </div>

      </section>



      {/* ========================================
          QUOTE
      ======================================== */}

      <section className="divulgacion-quote">

        <div className="institutional-container">

          <span>
            ✦
          </span>

          <blockquote>
            El cielo no pertenece solamente a los astrónomos.
            <strong>
              Es patrimonio de todos.
            </strong>
          </blockquote>

        </div>

      </section>



      {/* ========================================
          TURISMO
      ======================================== */}

      <section
        className="divulgacion-tourism"
        id="turismo"
      >

        <div className="institutional-container">

          <div className="divulgacion-section-heading">

            <div>

              <span className="section-eyebrow">
                02 · ASTRONOMÍA PARA TURISTAS
              </span>

              <h2>
                Valle Grande
                <span>bajo las estrellas.</span>
              </h2>

            </div>


            <p>
              Una propuesta que combina el paisaje de Mendoza
              con experiencias de reconocimiento del cielo,
              divulgación astronómica y observación a través
              de telescopios.
            </p>

          </div>



          <div className="tourism-hero">

            <img
              src="/images/divulgacion/turismo/hotel-valle-grande.png"
              alt="Hotel Valle Grande"
            />

            <div className="tourism-hero__card">

              <span>
                DESDE 2002
              </span>

              <strong>
                Observatorio
                <br />
                B-612
              </strong>

              <small>
                Valle Grande · Mendoza
              </small>

            </div>

          </div>



          <div className="tourism-story">

            <div className="tourism-story__copy">

              <span className="section-eyebrow">
                UNA NOCHE DIFERENTE
              </span>

              <h3>
                Aprender astronomía mirando el cielo real.
              </h3>

              <p>
                Las actividades comenzaban con una introducción
                audiovisual para comprender qué observar,
                seguida por el reconocimiento de estrellas,
                constelaciones y planetas visibles.
              </p>

              <p>
                La experiencia continuaba con observación
                telescópica, permitiendo descubrir detalles
                de la Luna, los planetas y distintos objetos
                del cielo profundo.
              </p>

            </div>


            <figure className="tourism-story__image">

              <img
                src="/images/divulgacion/turismo/observatorio-valle-grande.jpg"
                alt="Observatorio de Valle Grande"
              />

              <figcaption>
                Observatorio astronómico de Valle Grande
              </figcaption>

            </figure>

          </div>



          <div className="tourism-celestial">

            <figure>

              <div className="tourism-celestial__image">

                <img
                  src="/images/divulgacion/turismo/luna.jpg"
                  alt="Fotografía de la Luna"
                />

              </div>

              <figcaption>

                <span>
                  01
                </span>

                <div>

                  <strong>
                    La Luna
                  </strong>

                  <small>
                    Cráteres, mares y relieve lunar.
                  </small>

                </div>

              </figcaption>

            </figure>


            <figure>

              <div className="tourism-celestial__image">

                <img
                  src="/images/divulgacion/turismo/jupiter.jpg"
                  alt="Fotografía de Júpiter"
                />

              </div>

              <figcaption>

                <span>
                  02
                </span>

                <div>

                  <strong>
                    Júpiter
                  </strong>

                  <small>
                    El gigante del Sistema Solar.
                  </small>

                </div>

              </figcaption>

            </figure>

          </div>



          {/* VIAJES ESTUDIANTILES */}

          <div className="student-trips">

            <div className="student-trips__image">

              <img
                src="/images/divulgacion/turismo/viajes-estudiantiles.jpg"
                alt="Actividad astronómica con estudiantes"
              />

            </div>


            <div className="student-trips__content">

              <span>
                EXPERIENCIAS EDUCATIVAS
              </span>

              <h3>
                Viajes estudiantiles.
              </h3>

              <p>
                La astronomía también formó parte de propuestas
                destinadas a contingentes estudiantiles,
                ofreciendo una experiencia educativa diferente
                dentro de su visita a Valle Grande.
              </p>

              <div className="student-trips__line" />

              <small>
                OBSERVACIÓN · EDUCACIÓN · NATURALEZA
              </small>

            </div>

          </div>

        </div>

      </section>



      {/* ========================================
          IYA 2009
      ======================================== */}

      <section
        className="divulgacion-iya"
        id="iya2009"
      >

        <div className="divulgacion-iya__stars" />


        <div className="institutional-container">

          <div className="iya-header">

            <div>

              <span className="iya-header__eyebrow">
                ARCHIVO · 2009
              </span>

              <h2>
                El universo,
                <span>
                  tuyo para descubrir.
                </span>
              </h2>

            </div>


            <div className="iya-stat">

              <strong>
                350+
              </strong>

              <span>
                PERSONAS
              </span>

              <p>
                participaron de una noche
                pública de observación.
              </p>

            </div>

          </div>



          <div className="iya-info">

            <div>

              <span>
                06 FEB 2009
              </span>

              <strong>
                San Rafael · Mendoza
              </strong>

            </div>


            <p>
              En el marco del Año Internacional de la
              Astronomía, el Instituto Copérnico realizó
              una actividad gratuita de observación destinada
              a toda la comunidad, utilizando telescopios
              portátiles para acercar el cielo al público.
            </p>

          </div>



          <div className="iya-gallery">

            {iyaImages.map((image, index) => (

              <figure
                key={image}
                className={
                  index === 0
                    ? 'iya-gallery__item iya-gallery__item--large'
                    : 'iya-gallery__item'
                }
              >

                <img
                  src={image}
                  alt={`Observación pública 2009 - ${index + 1}`}
                />

              </figure>

            ))}

          </div>

        </div>

      </section>



      {/* ========================================
          FINAL
      ======================================== */}

      <section className="divulgacion-final">

        <div className="institutional-container divulgacion-final__grid">

          <div>

            <span className="section-eyebrow">
              DIVULGACIÓN CIENTÍFICA
            </span>

            <h2>
              Descubrir el universo empieza
              <span>con una mirada.</span>
            </h2>

          </div>


          <div className="divulgacion-final__content">

            <p>
              Seguimos creando espacios para aprender,
              observar y compartir astronomía con personas
              de todas las edades.
            </p>

            <div className="divulgacion-final__actions">

            <Link
  to="/novedades"
  className="btn btn--primary"
>
  Ver novedades
  <span>→</span>
</Link>

              <a
                href="https://www.institutocopernico.org/moodle/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary"
              >
                Campus Virtual
                <span>↗</span>
              </a>

            </div>

          </div>

        </div>

      </section>


    </main>
  )
}


export default DivulgacionPage