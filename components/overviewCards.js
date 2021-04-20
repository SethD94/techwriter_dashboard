import React from "react";
import { Container, Row, Col, Card, CardBody, CardImg } from "shards-react";

export default function CardBodyExample() {
  return (
    <div>
      <Row>
        <Col>
          <Card>
            <CardImg top src="https://place-hold.it/300x200" />
            <CardBody>
              <p>This is the body of the card.</p>
            </CardBody>
          </Card>
        </Col>

        <Col>
          <Card>
            <CardImg top src="https://place-hold.it/300x200" />
            <CardBody>
              <p>This is the body of the card.</p>
            </CardBody>
          </Card>
        </Col>

        <Col>
          <Card>
            <CardImg top src="https://place-hold.it/300x200" />
            <CardBody>
              <p>This is the body of the card.</p>
            </CardBody>
          </Card>
        </Col>

        <Col>
          <Card>
            <CardImg top src="https://place-hold.it/300x200" />
            <CardBody>
                <p>This is the body of the card.</p>
            </CardBody>
           </Card>
        </Col>
        <Col>
          <Card>
            <CardImg top src="https://place-hold.it/300x200" />
            <CardBody>
                <p>This is the body of the card.</p>
            </CardBody>
           </Card>
        </Col>
      </Row>
    </div>
  );
}
