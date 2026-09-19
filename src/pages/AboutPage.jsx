import { Link } from 'react-router-dom'

import '../styles/pages/about.css'

const pillars = [
  {
    number: '01',
    title: 'Educación',
    description:
      'Formación e iniciación científica para acercar la astronomía a nuevas generaciones.',
  },

  {
    number: '02',
    title: 'Investigación',
    description:
      'Producción científica, observación astronómica y desarrollo tecnológico.',
  },

  {
    number: '03',
    title: 'Divulgación',
    description:
      'Astronomía y ciencia para estudiantes, aficionados y público general.',
  },

  {
    number: '04',
    title: 'Observación',
    description:
      'Un vínculo directo con el cielo a través de la observación y la experiencia.',
  },
]


const team = [
  {
    role: 'Directora',
    name: 'Lic. María José Mundet',
    location: 'Rama Caída, Mendoza',
  },

  {
    role: 'Director Científico · Fundador',
    name: 'Dr. Jaime R. García',
    location: 'Rama Caída, Mendoza',
  },

  {
    role: 'Personal científico y técnico',
    name: 'Dr. Federico García',
    location: 'Rama Caída, Mendoza',
  },

  {
    role: 'Personal científico y técnico',
    name: 'Dr. José Alejo Molina Lera',
    location: 'Madrid, España',
  },

  {
    role: 'Personal científico y técnico',
    name: 'Pablo S. Wahnon',
    location: 'Buenos Aires',
  },

  {
    role: 'Personal científico y técnico',
    name: 'Dr. Juan Raúl Cebral',
    location: 'Fairfax, Virginia, USA',
  },

  {
    role: 'Personal científico y técnico',
    name: 'Dr. Román Scoccimarro',
    location: 'New York, USA',
  },

  {
    role: 'Personal científico y técnico',
    name: 'Dr. Martín Zimmermann',
    location: 'Buenos Aires',
  },
]


const collaborators = [
  'Pablo Testai · Fundador',
  'Cecilia Luraschi',
  'Lucas Roco',
  'Dino Sammito',
  'Rodolfo Ferraiuolo',
  'Lic. Dolores García',
  'Andrés Risi',
  'Prof. Jaime Veas Oyarzo',
]


function AboutPage() {
  return (
    <div className="about-page">

      {/* ========================================
          HERO
      ======================================== */}

      <section className="about-hero">

        <div className="about-hero__stars" />

        <div className="institutional-container about-hero__container">

          <div className="about-hero__content">

            <span className="about-hero__eyebrow">
              INSTITUTO COPÉRNICO · DESDE 1973
            </span>

            <h1>
              Más de medio siglo
              <span>mirando hacia el cielo.</span>
            </h1>

            <p>
              Ciencia, educación, investigación y divulgación
              reunidas por una misma curiosidad:
              comprender mejor el Universo.
            </p>

          </div>


          <div className="about-hero__year">

            <small>
              FUNDADO EN
            </small>

            <strong>
              1973
            </strong>

            <span>
              Buenos Aires · Argentina
            </span>

          </div>

        </div>

      </section>



      {/* ========================================
          INTRO / HISTORIA
      ======================================== */}

      <section className="about-story institutional-section">

        <div className="institutional-container about-story__grid">

          <div className="about-story__content">

            <span className="section-eyebrow">
              NUESTRA HISTORIA
            </span>

            <h2 className="section-title">
              Una historia nacida de la curiosidad.
            </h2>

            <p className="about-story__lead">
              El Instituto Copérnico fue fundado en la ciudad
              de Buenos Aires el 25 de marzo de 1973,
              coincidiendo con el quinto centenario del
              nacimiento de Nicolás Copérnico.
            </p>

            <p>
              Su nombre rinde homenaje al astrónomo polaco
              cuya obra transformó nuestra manera de entender
              el lugar de la Tierra en el Universo.
            </p>

            <p>
              Desde entonces, el Instituto desarrolla
              actividades de docencia, investigación
              científica y divulgación, construyendo durante
              más de medio siglo un espacio de encuentro
              entre ciencia y sociedad.
            </p>

          </div>


          <div className="about-story__visual">

            <div className="about-story__image" />

            <div className="about-story__date-card">

              <span>
                25
              </span>

              <div>
                <strong>
                  MARZO
                </strong>

                <small>
                  1973
                </small>
              </div>

            </div>

          </div>

        </div>

      </section>



      {/* ========================================
          FRASE
      ======================================== */}

      <section className="about-quote">

        <div className="institutional-container">

          <div className="about-quote__content">

            <span className="about-quote__symbol">
              ✦
            </span>

            <blockquote>
              “Comprender el cielo es también
              comprender nuestro lugar en el Universo.”
            </blockquote>

            <div className="about-quote__line" />

          </div>

        </div>

      </section>



      {/* ========================================
          PILARES
      ======================================== */}

      <section className="about-pillars institutional-section">

        <div className="institutional-container">

          <div className="about-section-intro">

            <div>

              <span className="section-eyebrow">
                LO QUE HACEMOS
              </span>

              <h2 className="section-title">
                Cuatro formas de acercarnos al Universo.
              </h2>

            </div>


            <p>
              El Instituto combina ciencia, enseñanza,
              observación y divulgación para construir
              conocimiento y compartirlo con la comunidad.
            </p>

          </div>


          <div className="about-pillars__grid">

            {pillars.map((pillar) => (

              <article
                key={pillar.number}
                className="about-pillar"
              >

                <span className="about-pillar__number">
                  {pillar.number}
                </span>

                <div className="about-pillar__icon">
                  ✦
                </div>

                <h3>
                  {pillar.title}
                </h3>

                <p>
                  {pillar.description}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>



      {/* ========================================
          INVESTIGACIÓN
      ======================================== */}

      <section className="about-science">

        <div className="institutional-container about-science__grid">

          <div className="about-science__intro">

            <span className="section-eyebrow">
              CIENCIA
            </span>

            <h2>
              Investigación que mira más allá.
            </h2>

            <p>
              El Instituto desarrolla actividad científica
              en distintas áreas de la astronomía y mantiene
              vínculos con investigadores y observadores
              dentro y fuera de Argentina.
            </p>

            <Link
              to="/investigacion"
              className="btn btn--primary"
            >
              Explorar investigación

              <span>
                →
              </span>
            </Link>

          </div>


          <div className="about-science__areas">

            <article>

              <span>
                01
              </span>

              <h3>
                Estrellas variables
              </h3>

              <p>
                Observación y estudio de estrellas cuya
                luminosidad cambia con el tiempo.
              </p>

            </article>


            <article>

              <span>
                02
              </span>

              <h3>
                Observatorios robóticos
              </h3>

              <p>
                Desarrollo de tecnología aplicada a la
                automatización y observación astronómica.
              </p>

            </article>


            <article>

              <span>
                03
              </span>

              <h3>
                Colaboración científica
              </h3>

              <p>
                Vinculación con organizaciones,
                investigadores y astrónomos aficionados.
              </p>

            </article>

          </div>

        </div>

      </section>



      {/* ========================================
          EQUIPO
      ======================================== */}

      <section className="about-team institutional-section">

        <div className="institutional-container">

          <div className="about-section-intro">

            <div>

              <span className="section-eyebrow">
                LAS PERSONAS
              </span>

              <h2 className="section-title">
                El equipo detrás del Instituto.
              </h2>

            </div>


            <p>
              Profesionales, investigadores y colaboradores
              unidos por la astronomía, la educación
              y la divulgación científica.
            </p>

          </div>


          <div className="about-team__grid">

            {team.map((member) => (

              <article
                key={`${member.name}-${member.role}`}
                className="about-team-card"
              >

                <div className="about-team-card__symbol">
                  ✦
                </div>

                <span>
                  {member.role}
                </span>

                <h3>
                  {member.name}
                </h3>

                <p>
                  {member.location}
                </p>

              </article>

            ))}

          </div>


          <div className="about-collaborators">

            <div className="about-collaborators__title">

              <span>
                COLABORADORES
              </span>

              <div />

            </div>


            <div className="about-collaborators__names">

              {collaborators.map((person) => (

                <span key={person}>
                  {person}
                </span>

              ))}

            </div>

          </div>

        </div>

      </section>



      {/* ========================================
          CONTACT / LOCATION
      ======================================== */}

      <section className="about-location">

        <div className="institutional-container about-location__grid">

          <div>

            <span className="section-eyebrow">
              DÓNDE ESTAMOS
            </span>

            <h2>
              Bajo el cielo de Mendoza.
            </h2>

            <p>
              Instituto Copérnico
              <br />

              Gutiérrez esq. Callejón Agrario
              <br />

              Rama Caída · Mendoza · Argentina
            </p>

          </div>


          <div className="about-location__coordinates">

            <span>
              ARGENTINA
            </span>

            <strong>
              MENDOZA
            </strong>

            <small>
              RAMA CAÍDA
            </small>

          </div>

        </div>

      </section>



      {/* ========================================
          FINAL CTA
      ======================================== */}

      <section className="about-final">

        <div className="institutional-container about-final__grid">

          <div>

            <span>
              SEGUÍ EXPLORANDO
            </span>

            <h2>
              El Universo todavía tiene mucho para mostrarnos.
            </h2>

          </div>


          <div className="about-final__actions">

            <Link
              to="/divulgacion"
              className="btn btn--primary"
            >
              Descubrir divulgación
              <span>→</span>
            </Link>


            <a
              href="https://www.institutocopernico.org/moodle/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--light-outline"
            >
              Campus Virtual
              <span>↗</span>
            </a>

          </div>

        </div>

      </section>

    </div>
  )
}


export default AboutPage