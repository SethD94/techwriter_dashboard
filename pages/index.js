import Head from 'next/head'
import router from 'next/router'
import { Container, Row, Col, Card, Button, CardText, CardTitle, CardHeader } from 'shards-react'

export default function Home() {

  const handleRedirectToUser = () => {
    router.push('/users');
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
            <Button onClick={handleRedirectToUser}>Users Page</Button>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
