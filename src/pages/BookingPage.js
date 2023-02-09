import { calendarUrl } from "../app/shared/calendarUrl";
import { Row, Col, Container } from 'reactstrap';

const BookingPage = () => {
    return (
        <Container>
            <Row>
                <Col md='6'>
                    <iframe
                        src={calendarUrl}
                        style={{ border: 'solid 1px #777' }}
                        width="100%"
                        height='600'
                        frameBorder="0"
                        scrolling="no"
                    />
                </Col>
                <Col>

                </Col>
            </Row>
        </Container>
      );
}

export default BookingPage;