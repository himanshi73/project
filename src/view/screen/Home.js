import { Container,Row,Col} from "react-bootstrap";
export default function Home(){
  return(
    <Container className='big-danger' fluid>
<Row>
  <Col>
  <h1>col1</h1>
  </Col>
  <Col>
  <h1>col2</h1>
  </Col>
  <Col>
  <h1>col3</h1>
  </Col>
  
</Row>
</Container>
  )
}