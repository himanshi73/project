import { Col, Container, Row,Nav,Button,Form,Navbar,Card,CardGroup } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { banner,about } from '../data/Data';
import { useNavigate } from 'react-router-dom';
import Details from "../screen/Details";
export default function Home() {
console.log(banner)
 console.log(about)
const nav = useNavigate()
return (
    <Container>
      <Row>
        <Col>
       <Navbar bg="light" expand="lg">
        <Container fluid>
        <Navbar.Brand href="#">DOZECAFE</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px'}}
            navbarScroll >
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="home">About</Nav.Link>
            <Nav.Link href="#action3">Blog</Nav.Link>
            <Nav.Link href="#action4">Customers</Nav.Link>
            <Nav.Link href="home">Contact</Nav.Link>
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
      {
        banner.map(function(d)
        {return(
<Carousel.Item>
          <img
            className="slider"
            src={d}
            alt="First slide"
          />
          <Carousel.Caption style={{top:160}}>
           <h1 style={{top:20, bottom:30}}><b>COFFEE</b></h1>
            <h2><i>Tasty Of DozeCafe</i></h2>
            <p>more-or-less normal distribution of letters, as opposed to using</p>
          </Carousel.Caption>
        </Carousel.Item>
         )
        })
}      
</Carousel> 
 
 <Row>
 <Col className='space'>
  <h1><u>OUR COFFEE OFFER</u></h1>
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
          <Button variant="primary">See More</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://www.coffeefriend.co.uk/app/uploads/2019/05/3-coffee-bean-types.jpg" />
        <Card.Body>
        <Card.Title>BEAN VARIETIES</Card.Title>
          <Card.Text>
            looking at its layout. The point of
          </Card.Text>
          <Button variant="primary">See More</Button>
        </Card.Body>
      </Card>

      
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://img.freepik.com/premium-photo/sinnamon-bun-coffee-illustration-generative-ai_115919-11140.jpg" />
        <Card.Body>
          <Card.Title>COFFEE&PASTRY</Card.Title>
          <Card.Text>
          looking at its layout. The point of
          </Card.Text>
          <Button variant="primary">See More</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD9WVb8l1q706xRszI2Is8XYsNlb-FrICcZPqMUqzXtrnglEuRdJdsBOp0cxqx44vSmQs&usqp=CAU" />
        <Card.Body>
        <Card.Title>COFFEE TO Go</Card.Title>
          <Card.Text>
            looking at its layout. The point of
          </Card.Text>
          <Button variant="primary"onClick={Details}>See More</Button>
        </Card.Body>
      </Card>
</div>
<Row>
 <Col className='about'>
  <h1><u>ABOUT US</u></h1>
</Col>
</Row>
<Row>

<Card className="image">
    <Col>
      <Card.Img src="https://media.istockphoto.com/id/1150531567/vector/modern-caf%C3%A9-shop-exterior-street-caf%C3%A9-outdoor-terrace-flat-design-vector-illustration.jpg?s=612x612&w=0&k=20&c=KJ_cG1E8fgFAbq28L-ipDXK9oWG-rsOM8DHxV5RtFCs="/>
      <Card.ImgOverlay>
        <Card.Title>Coffee distribution</Card.Title>
        <Card.Text>
        has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editorhas a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editor
        </Card.Text>
        <Card.Text><button>Read More</button></Card.Text>
      </Card.ImgOverlay>
  </Col>
</Card>
    </Row>
 <Row>
 <Col className='about'>
  <h1><u>WHAT SYAS CUSTOMERS</u></h1>
</Col>
</Row>

<CardGroup>
      <Card>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww&w=1000&q=80" />
        <Card.Body>
          <Card.Title>Uliya den</Card.Title>
          <Card.Text>
          now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancynow use Lorem Ipsum as their default model text,
          </Card.Text>
        </Card.Body>
        </Card>
      <Card>
        <Card.Img variant="top" src="https://images.squarespace-cdn.com/content/v1/54e5f14fe4b0072e737170a7/1440756870374-BDHGHU0JL82NLYQOZ2ET/Stranger+1+-+Simon" />
        <Card.Body>
          <Card.Title>Mihacal</Card.Title>
          <Card.Text>
          now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancynow use Lorem Ipsum as their default model text,
          </Card.Text>
        </Card.Body>
       </Card>
      <Card>
        <Card.Img variant="top" src="https://media.istockphoto.com/id/1319763895/photo/smiling-mixed-race-mature-man-on-grey-background.jpg?s=612x612&w=0&k=20&c=ZiuzNX9LhTMMcRFrYNfq_zFR7O_aH-q7x1L5elko5uU=" />
        <Card.Body>
          <Card.Title>Joy Moark</Card.Title>
          <Card.Text>
          now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancynow use Lorem Ipsum as their default model text,
          </Card.Text>
        </Card.Body>
        </Card>
    </CardGroup>

    <Row>
 <Col className='about'>
  <h1><u>OUR BLOG</u></h1>
</Col>
</Row>
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length:1 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src="https://howtostartanllc.com/images/business-ideas/business-idea-images/coffee-shop.jpg" />
            <Card.Body>
              <Card.Title>PREP TECHNIQUES COFFEE</Card.Title>
              <Card.Text>
              distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a moredistracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more
             <button>Read More</button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
        {Array.from({ length:1 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuKfm81Vw5audd2MNcXaSI9z6tZylhdvpx9UdquhS6Ayk9ywAkeaBDzadA26-XeRtJBhY&usqp=CAU" />
            <Card.Body>
              <Card.Title>PREP TECHNIQUES COFFEE</Card.Title>
              <Card.Text>
              distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a moredistracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more
              <button>Read More</button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    <Row>
 <Col className='about'>
  <h1><u>CONTACT US</u></h1>
</Col>
</Row>
    <Form className="form">
      <Row className="mb-3">
        <Form.Group className="mb-3" controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridemail">
          <Form.Label>email</Form.Label>
          <Form.Control type="email" placeholder="your email" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridnumber">
        <Form.Label>number</Form.Label>
        <Form.Control />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridmessage">
        <Form.Label>message</Form.Label>
        <Form.Control/>
      </Form.Group>
     <Button variant="primary" type="send">
        Submit
      </Button>
    </Form>
</Col>
   </Row>
    </Container>
  );
}