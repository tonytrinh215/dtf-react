import { useState } from 'react';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Container, Row, Col } from 'reactstrap';

const HomePage = (props) => {
  const [open, setOpen] = useState('therapy');

  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <Container>
        <Accordion open={open} toggle={toggle}>
            <AccordionItem>
                <AccordionHeader targetId="therapy">
                    <h2>Physical Therapy</h2>
                </AccordionHeader>
                <AccordionBody accordionId="therapy">
                    <p className="text-left">
                    <strong>Physical therapy for:</strong> 
                    <ul className='text-left'>
                        <li>Ambulation Dysfunction</li>
                        <li>Balance Training</li>
                        <li>Pain Management</li>
                        <li>Concussions</li>
                        <li>Orthopedics</li>
                        <li>Geriatrics</li>
                    </ul>
                    </p>
                </AccordionBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionHeader targetId="fitness">
                    <h2>Fitness Training</h2>
                </AccordionHeader>
                <AccordionBody accordionId="fitness">
                    <p class="text-left">
                        <strong>Fitness training for:</strong>
                        <ul>
                            <li>General Fitness</li>
                            <li>Bodybuilding</li>
                            <li>Endurance/Stamina</li>
                            <li>Diet/Macros Management</li>
                            <li>Strength Training</li>
                            <li>Powerlifting</li>
                        </ul>
                    </p>
                </AccordionBody>
            </AccordionItem>
        </Accordion>
    </Container>
  );
}

export default HomePage;