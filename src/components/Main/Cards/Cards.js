import React from 'react';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import Feature from '../../img/aa.png';
import BLM from '../../img/blm.png';
import Tree from '../../img/tree.png';
import Boat from '../../img/boat.png';
// import classes from './Cards.module.css';
// import { Link } from 'react-router-dom';


const Cards = () => (
    <div>
    <Card>
  <Card.Header>
    <Nav variant="tabs" defaultActiveKey="#first">
      <Nav.Item>
        <Nav.Link href="#first">From today's featured article</Nav.Link>
      </Nav.Item>
    </Nav>
  </Card.Header>
  <Card.Body>
  <img style={{height: "160px", paddingBottom: "2%"}} src={Feature} alt="feature" />
    <Card.Text>
    Randall Davidson (1848–1930) was an Anglican priest who was Archbishop of Canterbury from 1903 to 1928. Under his leadership the Church gained some independence from state control, but his efforts to modernise the Book of Common Prayer were frustrated by Parliament. Though cautious about bringing the Church into domestic party politics, Davidson did not shy away from larger political issues.
    </Card.Text>
    <Button variant="primary">Read More</Button>
  </Card.Body>
</Card>
<div style={{height: "15px"}}></div>
<Card>
  <Card.Header>
    <Nav variant="tabs" defaultActiveKey="#first">
      <Nav.Item>
        <Nav.Link href="#first">In the news</Nav.Link>
      </Nav.Item>
    </Nav>
  </Card.Header>
  <Card.Body>
  <img style={{height: "160px", paddingBottom: "2%"}} src={BLM} alt="feature" />
    <Card.Title>Protests erupted in the Toronto area on Sunday and more are planned for Monday.</Card.Title>
    <Card.Text>
    Protesters marched through the streets of Mississauga and closed down a section of road near where Mr Choudry was shot, demanding an independent inquiry into his death.
    </Card.Text>
    <Button variant="primary">Read More</Button>
  </Card.Body>
</Card>
<div style={{height: "15px"}}></div>


<CardGroup>
  <Card>
    <Card.Img style={{height: "350px"}} variant="top" src={Boat} />
    <Card.Body>
      <Card.Title>On this Day - June 22</Card.Title>
      <Card.Text>
      1948 – More than 800 West Indian immigrants disembarked from the British troopship HMT Empire Windrush at Tilbury, England, becoming known as the "Windrush generation".
      </Card.Text>
      <Button variant="primary">Read More</Button>
    </Card.Body>
  </Card>

  <Card>
    <Card.Img style={{height: "350px"}} variant="top" src={Tree} />
    <Card.Body>
      <Card.Title>Did you know...</Card.Title>
      <Card.Text>
      ... that the Strawberries and Cream Tree (pictured) is noted for producing two distinct colours of blossom on each side – pink and white – when it blooms every spring?
      </Card.Text>
      <Button variant="primary">Read More</Button>
    </Card.Body>
  </Card>
</CardGroup>
<div style={{height: "15px"}}></div>

</div>
);


export default Cards;