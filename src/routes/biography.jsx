import {
  Heading,
  Text,
  Image,
  Card,
  CardBody
} from '@chakra-ui/react'
import '../App.css'

function Biography() {

  return (
    <>
      <div className="bio-container"> 
        <Card className='bio-card-container'>
          <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '400px' }}
            src='https://gracieladominguez.org/worpress/blog/wp-content/uploads/2023/11/Graciela_Dominguez_Nava-edited.jpeg'
            alt='Graciela Dominguez'
          />
          <CardBody className="card-container">
          <Heading as='h1' color="brand.100" size='lg' textAlign={'center'}>Graciela Dominguez</Heading>
            <Text py='2' textAlign='justify'>
            Nací en Rosario, Sinaloa, de cuna rural cursé mis primeros estudios en las escuelas públicas de la comunidad donde crecí, Chametla, un pueblo con origen prehispánico. A la edad de 15 años, como muchos sinaloenses, migré a Culiacán para cursar estudios de preparatoria y universidad, desde entonces, la ciudad capital del estado ha sido mi casa. 
            </Text>
            <Text py='2' textAlign='justify'>
            Me gradué en 1998 de la Licenciatura en Sociología, la lucha por la construcción de un país más justo, con igualdad social, me llevaron a elegir esa formación. En mi Alma Mater fui Consejera Universitaria. Inicié mi participación en la vida pública/política de este país, desde la izquierda, en el proceso electoral de 1998, comprometida con las causas del pueblo. 
            </Text>
            <Text py='2' textAlign='justify'>
            Me involucré como activista en los movimientos pesqueros y por la defensa del patrimonio familiar de los derechohabientes del Infonavit, así como en el movimiento de los desplazados por la construcción de la presa Picachos, esto último me llevó a ser jefa de la Unidad de Atención a los Desplazados de la Presa Picachos en el H. Ayuntamiento de Mazatlán de 2011 a 2012.
            </Text>
          </CardBody>
        </Card>
        <br/>
        <Card className='bio-card-container'>
          <CardBody className="card-container">
            <Text py='2' textAlign='justify'>
            En la LIX Legislatura del H. Congreso del Estado de Sinaloa -de 2007 a 2010, fui diputada por primera vez, y coordinadora de la Fracción Parlamentaria del Partido de la Revolución Democrática. Después de algunos años dedicada a la academia como profesora de asignatura y subdirectora de Vinculación en la Universidad Tecnológica de Escuinapa, de 2018 a 2021 me desempeñé como diputada local en la LXIII Legislatura del H. Congreso del Estado de Sinaloa, donde -además, fungí como coordinadora del Grupo Parlamentario de MORENA y presidenta de la Junta de Coordinación Política, órgano de gobierno de ese Poder Legislativo. Me tocó integrar y coordinar la primera fracción morenista con mayoría en ese Congreso, y dar cauce, desde lo local, a las acciones legislativas necesarias para cimentar los procesos de la Cuarta Transformación liderada por el presidente Andrés Manuel López Obrador. Como diputada de la LXIII Legislatura, presidenta de la JUCOPO, propusimos y aprobamos disminuir los salarios de diputadas y diputados, así como eliminar el seguro de gastos médicos mayores y la caja de ahorros, por considerarlos privilegios de unos cuentos, por encima de trabajadoras y trabajadores. Aunado a ello, aprobamos la Ley de Austeridad para el Estado de Sinaloa y la Ley de Remuneraciones para Servidores Públicos, armonizando lo dispuesto en el marco legal local con las leyes generales en la materia. En congruencia, en el Congreso del Estado de Sinaloa implementamos un plan de austeridad y con las economías generadas, destinamos recursos a la construcción de vivienda, a la atención de las comunidades damnificadas por el paso de la tormenta 19E, y a la dotación de insumos y material médico en centros de salud y hospitales, necesarios para hacer frente a la pandemia por Covid19. 
            </Text>
            <Text py='2' textAlign='justify'>
            Fuimos la legislatura de la igualdad y de los derechos humanos. Reivindicando a la Cuarta Transformación como un movimiento que busca la regeneración de la vida pública nacional y el reconocimiento pleno de los derechos de todas y todos, aprobamos leyes para garantizar una participación igualitaria de las mujeres en cargos de elección popular y en la administración pública, y porque amor es amor, aprobamos en Sinaloa el matrimonio igualitario. Todas las personas, todos los derechos. 
            </Text>
            <Text py='2' textAlign='justify'>
            Sabedores de que el dinero público debe servir al pueblo, aprobamos presupuestos con carácter social, realizando reasignaciones a la Ley de Ingresos y Presupuesto de Egresos enviada por el Ejecutivo estatal -de oposición, logrando que los recursos se destinaran a atender a sectores históricamente olvidados, reivindicando la premisa ¡Por el bien de todos, primero los pobres!
            </Text>
            <Text py='2' textAlign='justify'>
            Con el triunfo de la Cuarta Transformación en Sinaloa, fui nombrada por el gobernador Rubén Rocha Moya, el 1 de noviembre de 2021, como Secretaria de Educación Pública y Cultura, desde ahí, en congruencia con los principios y el modelo educativo de la Nueva Escuela Mexicana, reivindicando el compromiso del gobernador del estado, hemos impulsado la transformación de la educación en Sinaloa y en México.
            </Text>
          </CardBody>
        </Card>
      </div>
      
      
    </>
  )
}

export default Biography
