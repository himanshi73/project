import { Col, Container, Row,Nav,Button,Form,Navbar,Card,Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
export default function Home() {
  return (
    <Container>
      <Row>
        <Col>
    
        <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">DozeCafe</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px'}}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <Nav.Link href="#action3">coffees</Nav.Link>
            <Nav.Link href="#action4">Shop</Nav.Link>
            <Nav.Link href="#action5">Blog</Nav.Link>
            <Nav.Link href="#action6">Contact</Nav.Link>
            <Nav.Link href="#" disabled>
              
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="slider"
          src="https://c4.wallpaperflare.com/wallpaper/231/256/948/coffee-bean-cup-still-life-photography-coffee-cup-wallpaper-preview.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>coffee</h1>
          <h2>Tasty Of DozeCafe</h2>
          <p>more-or-less normal distribution of letters, as opposed to using</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="slider"
          src="https://c4.wallpaperflare.com/wallpaper/1023/43/668/coffee-cup-coffee-cup-caffeine-wallpaper-preview.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
        <h1>coffee</h1>
          <h2>Tasty Of DozeCafe</h2>
          <p>more-or-less normal distribution of letters, as opposed to using</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="slider"
          src="https://thumbs.dreamstime.com/b/cup-coffee-love-28241518.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h1>coffee</h1>
          <h2>Tasty Of DozeCafe</h2>
          <p>more-or-less normal distribution of letters, as opposed to using</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> 
 
 <Row>
 <Col className='space'>
  <h1>OUR COFFEE OFFER</h1>
</Col>
</Row>
<div className="d-flex justify-content-around">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTiCxXcyNxBKgWT2_t-TQQ_DTFFEnfQz9p1OT5WTg4vaJ4eUE_OPh6Vvd4qxWJop6-w" />
        <Card.Body>
          <Card.Title>TYPES OF COFFEE</Card.Title>
          <Card.Text>
            looking at its layout. The point of
          </Card.Text>
          <Button variant="primary">Read More</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://www.coffeefriend.co.uk/app/uploads/2019/05/3-coffee-bean-types.jpg" />
        <Card.Body>
        <Card.Title>BEAN VARIETIES</Card.Title>
          <Card.Text>
            looking at its layout. The point of
          </Card.Text>
          <Button variant="primary">Read More</Button>
        </Card.Body>
      </Card>

      
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://img.freepik.com/premium-photo/sinnamon-bun-coffee-illustration-generative-ai_115919-11140.jpg" />
        <Card.Body>
          <Card.Title>COFFEE&PASTRY</Card.Title>
          <Card.Text>
          looking at its layout. The point of
          </Card.Text>
          <Button variant="primary">Read More</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD9WVb8l1q706xRszI2Is8XYsNlb-FrICcZPqMUqzXtrnglEuRdJdsBOp0cxqx44vSmQs&usqp=CAU" />
        <Card.Body>
        <Card.Title>COFFEE TO Go</Card.Title>
          <Card.Text>
            looking at its layout. The point of
          </Card.Text>
          <Button variant="primary">Read More</Button>
        </Card.Body>
      </Card>
</div>
<Row>
 <Col className='about'>
  <h1>ABOUT OUR SHOP</h1>
</Col>
</Row>
<Container>
      <Row>
        <Col  lg={6} md={4} className='image'>
          <div className='img'>
          <Image src="https://b.zmtcdn.com/data/pictures/1/19629341/2648d77ca00a0ca74ddecd5434a63678.jpg" thumbnail />
        </div>
        </Col>        
      </Row>
    </Container>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     ,
    <Row>
 <Col>
  <div className='aboutus'>
    <h1>Coffee distribution</h1>
  <p>has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editorhas a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editor</p>
  </div>
</Col>
</Row>

</Col>
   </Row>
    </Container>
  );
}

