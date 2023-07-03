import { Row,Col, Container,Card,Button} from "react-bootstrap"
export default function Details(){
 return(
 <Container>
<Row>
  <Col>
  <Row>
 <Col className='space'>
  <h1><u>Types of Coffee</u></h1>
</Col>
</Row>
  <div className="coffee">
  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://blogstudio.s3.theshoppad.net/coffeeheroau/ec178d83e5f597b162cda1e60cb64194.jpg" />
      <Card.Body>
        <Card.Title>Expresso</Card.Title>
        <Card.Text>
        Espresso is a coffee-brewing method of Italian origin, in which a small amount of nearly
         boiling water is forced under 9–10 bars of pressure.
        </Card.Text>
        <Button variant="primary">oder now</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Cappuccino_at_Sightglass_Coffee.jpg"/>
      <Card.Body>
        <Card.Title>Cappuccino</Card.Title>
        <Card.Text>
        A cappuccino is an espresso-based coffee drink that is traditionally prepared with steamed milk
        foam. Variations of the drink involve the use of cream instead of milk. 
        </Card.Text>
        <Button variant="primary">oder now</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.foodandwine.com/thmb/CCe2JUHfjCQ44L0YTbCu97ukUzA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Partners-Latte-FT-BLOG0523-09569880de524fe487831d95184495cc.jpg" />
      <Card.Body>
        <Card.Title>Latte</Card.Title>
        <Card.Text>
        Caffè latte, often shortened to just latte in English, is a coffee drink of Italian origin made 
        with espresso and steamed milkthrough finely-ground coffee beans
        </Card.Text>
        <Button variant="primary">oder now</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://desertfoodfeed.com/wp-content/uploads/2020/05/americano12.jpg"/>
      <Card.Body>
        <Card.Title>Americano</Card.Title>
        <Card.Text>
        Caffè Americano is a type of coffee drink prepared by diluting an espresso with hot water, 
        giving it a different flavor from traditionally brewed coffee. 
        </Card.Text>
        <Button variant="primary">oder now</Button>
      </Card.Body>
    </Card>
</div>
<div className="coffee2">
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i0.wp.com/gatherforbread.com/wp-content/uploads/2014/10/Dark-Chocolate-Mocha-Square.jpg?fit=1000%2C1000&ssl=1"/>
      <Card.Body>
        <Card.Title>Caffè Mocha</Card.Title>
        <Card.Text>
        A caffè mocha, also called mocaccino, is a chocolate-flavoured warm beverage that is a variant of a caffè latte
        </Card.Text>
        <Button variant="primary">oder now</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0137/1655/3786/files/how_to_make_a_flat_white.jpg?v=1612550904"/>
      <Card.Body>
        <Card.Title>flat white</Card.Title>
        <Card.Text>
        A flat white is a coffee drink consisting of espresso with microfoam. It is comparable to a latte, but smaller in volume
        </Card.Text>
        <Button variant="primary">oder now</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.caffesociety.co.uk/assets/recipe-images/macchiato-small.jpg"/>
      <Card.Body>
        <Card.Title>Caffè macchiato</Card.Title>
        <Card.Text>
        Caffè macchiato, sometimes called espresso macchiato, is an espresso coffee drink with a small amount of milk, usually foamed.
        </Card.Text>
        <Button variant="primary">oder now</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://pantryandlarder.com/wp-content/uploads/2021/02/sweeten-iced-coffee-recipe-feature-500x500.png"/>
      <Card.Body>
        <Card.Title>Iced Coffee</Card.Title>
        <Card.Text>
        Iced coffee is a coffee beverage served cold. It may be prepared either by brewing coffee normally and then serving it. 
        </Card.Text>
        <Button variant="primary">oder now</Button>
      </Card.Body>
    </Card>
</div>
<Row>
 <Col className='space'>
  <h1><u>Beans Varieties</u></h1>
</Col>
</Row>
<div className="beans">
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://enjoyjava.com/wp-content/uploads/2018/01/what-is-arabica-coffee.jpg"/>
      <Card.Body>
        <Card.Title>Arabica</Card.Title>
        <Card.Text>
        Arabica beans have a smoother, sweeter, and more nuanced flavour than other coffee types, with notes of fruit, chocolate, nuts, and caramel.
        </Card.Text>
        <Button variant="primary">oder now</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://enjoyjava.com/wp-content/uploads/2018/02/Robusta-coffee-beans-roatsted-close-up.jpg"/>
      <Card.Body>
        <Card.Title>Robusta</Card.Title>
        <Card.Text>
        Coffee made from beans of the Coffea canephora plant has low acidity and high bitterness, often with a distinct woody and nutty taste
        </Card.Text>
        <Button variant="primary">oder now</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://mews.in/wp-content/uploads/2022/08/excelsa-coffee-mews-1-e1661758808379.jpg"/>
      <Card.Body>
        <Card.Title>Excelsa</Card.Title>
        <Card.Text>
        Excelsa coffee is a bean species known for its exceptional flavor profile. Some of the flavor notes most often associated with excelsa coffee include fruity, woody, and earthy notes.
        </Card.Text>
        <Button variant="primary">oder now</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.shutterstock.com/image-photo/coffee-beans-roasted-liberica-close-260nw-1854245281.jpg"/>
      <Card.Body>
        <Card.Title>Liberica</Card.Title>
        <Card.Text>
        Coffea liberica, commonly known as the Liberian coffee, is a species of flowering plant in the family Rubiaceae from which coffee is produced.
        </Card.Text>
        <Button variant="primary">oder now</Button>
      </Card.Body>
    </Card>
</div>
</Col>
</Row>
 </Container>     
)}