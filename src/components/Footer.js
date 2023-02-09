import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import FooterLogo from '../app/assets/dtf-logo-150-84.png';

const Footer = () => {
    return (
        <footer className='site-footer'>
            <Container>
                <Row>
                    <Col>
                        <img src={FooterLogo} alt='DT Logo' />
                    </Col>
                    <Col>
                        <h4>Socials</h4>
                        <a className='btn btn-social-icon btn-instagram' href='http://instagram.com'>
                            <i className='fa fa-instagram' />
                        </a> {' '}
                        <a className='btn btn-social-icon btn-facebook' href='http://facebook.com'>
                            <i className='fa fa-facebook' />
                        </a> {' '}
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;