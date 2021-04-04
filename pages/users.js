import Head from 'next/head'
import router from 'next/router';
import { Container, Row, Col, Card, Button, CardText, CardTitle, CardHeader } from 'shards-react'

export default function User() {

  const handleRedirectToHome = () => {
    router.push('/');
  };
  return (
    <Container>
      <Head>
        <title>Working Tile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Row>
        <Col>
          <Card>
            <CardHeader>User page</CardHeader>
            <Button onClick={handleRedirectToHome}>Home</Button>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
