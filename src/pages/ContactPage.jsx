import {
  useState,
} from 'react'

import '../styles/pages/contact.css'


function ContactPage() {

  const [formData, setFormData] =
    useState({
      email: '',
      subject: '',
      message: '',
    })


  const [status, setStatus] =
    useState('idle')


  const handleChange = (event) => {

    const {
      name,
      value,
    } = event.target

    setFormData((current) => ({
      ...current,
      [name]: value,
    }))

  }


  const handleSubmit = async (event) => {

    event.preventDefault()

    setStatus('sending')


    try {

      const response =
        await fetch(
          'https://formspree.io/f/mbglkzdk',
          {
            method: 'POST',

            headers: {
              'Content-Type':
                'application/json',

              Accept:
                'application/json',
            },

            body:
              JSON.stringify({
                email:
                  formData.email,

                subject:
                  formData.subject,

                message:
                  formData.message,
              }),
          }
        )


      if (!response.ok) {
        throw new Error(
          'No se pudo enviar el mensaje'
        )
      }


      setStatus('success')


      setFormData({
        email: '',
        subject: '',
        message: '',
      })

    } catch (error) {

      console.error(error)

      setStatus('error')

    }

  }


  return (
    <main className="contact-page">


      {/* ========================================
          HERO
      ======================================== */}

      <section className="contact-hero">

        <div className="contact-hero__stars" />

        <div className="institutional-container contact-hero__container">

          <div>

            <span className="section-eyebrow">
              CONTACTO
            </span>

            <h1>
              Hablemos
              <span>
                de astronomía.
              </span>
            </h1>

            <p>
              Escribinos para consultas,
              actividades, propuestas o cualquier
              inquietud relacionada con el
              Instituto Copérnico.
            </p>

          </div>


          <div className="contact-hero__symbol">

            <div className="contact-hero__orbit">

              <span />

            </div>

          </div>

        </div>

      </section>



      {/* ========================================
          CONTACT FORM
      ======================================== */}

      <section className="contact-main">

        <div className="institutional-container contact-main__grid">


          {/* LEFT */}

          <div className="contact-info">

            <span className="section-eyebrow">
              ESCRIBINOS
            </span>

            <h2>
              Estamos del
              <span>
                otro lado.
              </span>
            </h2>


            <p>
              Completá el formulario y tu mensaje
              será enviado directamente al
              Instituto Copérnico.
            </p>


            <div className="contact-info__line" />


            <div className="contact-info__item">

              <span>
                01
              </span>

              <div>

                <strong>
                  Consulta
                </strong>

                <p>
                  Contanos en el asunto el motivo
                  principal de tu mensaje.
                </p>

              </div>

            </div>


            <div className="contact-info__item">

              <span>
                02
              </span>

              <div>

                <strong>
                  Respuesta
                </strong>

                <p>
                  Utilizaremos tu email únicamente
                  para poder responderte.
                </p>

              </div>

            </div>


            <div className="contact-info__item">

              <span>
                03
              </span>

              <div>

                <strong>
                  Comunidad
                </strong>

                <p>
                  También podés escribirnos por
                  actividades, educación y
                  divulgación científica.
                </p>

              </div>

            </div>

          </div>



          {/* FORM */}

          <div className="contact-form-card">


            {status === 'success' ? (

              <div className="contact-success">

                <div className="contact-success__icon">
                  ✓
                </div>

                <span>
                  MENSAJE ENVIADO
                </span>

                <h2>
                  Gracias por
                  escribirnos.
                </h2>

                <p>
                  Tu mensaje se envió con éxito.
                  El Instituto Copérnico podrá
                  responderte al email que
                  proporcionaste.
                </p>


                <button
                  type="button"
                  className="btn btn--primary"
                  onClick={() =>
                    setStatus('idle')
                  }
                >
                  Enviar otro mensaje
                </button>

              </div>

            ) : (

              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                <div className="contact-form__heading">

                  <span>
                    FORMULARIO DE CONTACTO
                  </span>

                  <h2>
                    Tu mensaje.
                  </h2>

                </div>



                <div className="contact-field">

                  <label htmlFor="email">
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required
                    autoComplete="email"
                  />

                </div>



                <div className="contact-field">

                  <label htmlFor="subject">
                    Asunto
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="¿Sobre qué querés escribirnos?"
                    required
                    maxLength={120}
                  />

                </div>



                <div className="contact-field">

                  <label htmlFor="message">
                    Mensaje
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Escribí tu mensaje..."
                    required
                    rows={8}
                    maxLength={3000}
                  />

                  <small>
                    {formData.message.length}
                    /3000
                  </small>

                </div>



                {status === 'error' && (

                  <div className="contact-error">

                    No pudimos enviar el mensaje.
                    Intentá nuevamente en unos
                    minutos.

                  </div>

                )}



                <button
                  type="submit"
                  className="contact-submit"
                  disabled={
                    status === 'sending'
                  }
                >

                  <span>

                    {status === 'sending'
                      ? 'Enviando...'
                      : 'Enviar mensaje'}

                  </span>

                  <strong>
                    {status === 'sending'
                      ? '···'
                      : '→'}
                  </strong>

                </button>

              </form>

            )}

          </div>

        </div>

      </section>



      {/* ========================================
          FINAL
      ======================================== */}

      <section className="contact-final">

        <div className="institutional-container contact-final__content">

          <span>
            ✦
          </span>

          <h2>
            El universo siempre
            empieza con una pregunta.
          </h2>

        </div>

      </section>


    </main>
  )
}


export default ContactPage