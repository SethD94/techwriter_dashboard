import { useState } from 'react';
import Head from 'next/head'
import router from 'next/router'
import { Container, Row, Col, Card, Button, CardText, CardTitle, CardHeader, CardBody, InputGroup, FormInput, FormGroup, Collapse } from 'shards-react'

export default function Home() {

  const handleRedirectToUser = () => {
    router.push('/users');
  }

  const [information, setInformation] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const [isToggled, setIsToggled] = useState(false);

  const handleInfoChange = (e) => {
    const { target } = e;

    setInformation({ ...information, [e.target.name]: e.target.value })
  }


  return (
    <Container>
      <Head>
        <title>Working Tile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Row>
        <Col>
          <Card>
            <CardHeader>Home Page</CardHeader>
            <CardBody>
            <FormGroup>
                <label>First Name</label>
                <FormInput name={'firstName'} onChange={handleInfoChange} value={information.firstName} />
              </FormGroup>

              <FormGroup>
                <label>Last Name</label>
                <FormInput name={'lastName'} onChange={handleInfoChange} value={information.lastName} />
              </FormGroup>

              <FormGroup>
                <label>Email</label>
                <FormInput name={'email'} onChange={handleInfoChange} value={information.emails} />
              </FormGroup>

              <Button onClick={() => setIsToggled(!isToggled)}>Toggle</Button>
              <Collapse open={isToggled}>
                <p>{information.firstName}</p>
                <p>{information.lastName}</p>
                <p>{information.email}</p>
              </Collapse>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
