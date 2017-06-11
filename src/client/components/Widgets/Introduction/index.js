import React from 'react'
import {Row, Col, PageHeader} from 'react-bootstrap'
import img from '../../../assets/images/black-mirror.png'
import img2 from '../../../assets/images/matrix.jpeg'
import './index.scss'

const Introduction = (props) => (<section id='intro' className='introduction-section'>
  <PageHeader>La Tecnologia e le Distopie </PageHeader>
  <Row>
    <Col md={7}>
      <h2> Titolo 2</h2>
      <p>Per distopia (o antiutopia, pseudo-utopia, utopia negativa o cacotopia) s'intende la descrizione di una
        immaginaria società o comunità altamente indesiderabile o spaventosa. Il termine, da pronunciarsi
        "distopìa", è stato coniato come contrario di utopia ed è soprattutto utilizzato in riferimento alla
        rappresentazione di una società fittizia (spesso ambientata nel futuro) nella quale alcune tendenze sociali,
        politiche e tecnologiche avvertite nel presente sono portate a estremi negativi.

        Secondo l'Oxford English Dictionary, il termine fu coniato nel 1868 dal filosofo John Stuart Mill, che si
        serviva allo stesso tempo anche di un sinonimo coniato da Jeremy Bentham nel 1818, cacotopìa. Entrambe le
        parole si basano sul termine utopìa, inteso come il luogo dove tutto è come dovrebbe essere. Distopia è quindi
        l'esatto opposto, cioè un luogo del tutto spiacevole e indesiderabile. Spesso la differenza tra utopìa e
        distopìa dipende dal punto di vista dell'autore dell'opera. I testi distopici appaiono come opere di
        avvertimento,
        o satire, che mostrano le tendenze attuali estrapolate sino a conclusioni apocalittiche. Dunque la distopia si
        basa su pericoli percepiti nella società attuale, spostando però l'interesse su un'epoca e un luogo distanti o
        successivi a una discontinuità storica, come nelle opere fantascientifiche di H. G. Wells.</p>
    </Col>
    <Col md={5}>
      <img role="presentation" src={img} className="img-responsive"/>
    </Col>
  </Row>
  <Row>
    <Col xs={12} md={7} mdPush={5}>
      <h2> Titolo 2</h2>
      <p>Per distopia (o antiutopia, pseudo-utopia, utopia negativa o cacotopia) s'intende la descrizione di una
        immaginaria società o comunità altamente indesiderabile o spaventosa. Il termine, da pronunciarsi
        "distopìa", è stato coniato come contrario di utopia ed è soprattutto utilizzato in riferimento alla
        rappresentazione di una società fittizia (spesso ambientata nel futuro) nella quale alcune tendenze sociali,
        politiche e tecnologiche avvertite nel presente sono portate a estremi negativi.

        Secondo l'Oxford English Dictionary, il termine fu coniato nel 1868 dal filosofo John Stuart Mill, che si
        serviva allo stesso tempo anche di un sinonimo coniato da Jeremy Bentham nel 1818, cacotopìa. Entrambe le
        parole si basano sul termine utopìa, inteso come il luogo dove tutto è come dovrebbe essere. Distopia è quindi
        l'esatto opposto, cioè un luogo del tutto spiacevole e indesiderabile. Spesso la differenza tra utopìa e
        distopìa dipende dal punto di vista dell'autore dell'opera. I testi distopici appaiono come opere di
        avvertimento,
        o satire, che mostrano le tendenze attuali estrapolate sino a conclusioni apocalittiche. Dunque la distopia si
        basa su pericoli percepiti nella società attuale, spostando però l'interesse su un'epoca e un luogo distanti o
        successivi a una discontinuità storica, come nelle opere fantascientifiche di H. G. Wells.</p>
    </Col>
    <Col xs={12} md={5} mdPull={7}>
      <img role="presentation" src={img2} className="img-responsive"/>
    </Col>
  </Row>
</section>)

export default Introduction
