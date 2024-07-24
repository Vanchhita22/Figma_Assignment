import React from 'react';
import styled from 'styled-components';
import Image1 from '../Asserts/image/images.png';

const Content = () => {
  return (
    <Container>
      <ContentWrapper>
        <StyledH1>
          <strong>User-Centric Excellence</strong>: <span>Our</span> <br/>
          App Development services <br/>
          <span>Tackles Your Pain Points</span>
        </StyledH1>
        
        <StyledP>
          Experience a Seamless Digital Journey with <strong>Desun</strong> - Where Every Line<br/>
          of Code Resolves Your Challenges and <span>Elevates Your App Experience</span><br/>
          to Unparalleled Heights.
        </StyledP>
        <ContactForm>
        <h3>Leave your contacts and we will get call back <br/>
         within 30 minutes</h3>
          <FormRow>
            <Label>
              Full name: 
              <Input type="text" placeholder="My Name" />
            </Label>
            <Label>
              Phone number:
              <Input type="text" placeholder="Phone Number" />
            </Label>
          </FormRow>
          <FormRow>
            <Label>
              Business Name:
              <Input type="text" placeholder="ABC Technologies pvt ltd" />
            </Label>
            <Label>
              Business Email:
              <Input type="email" placeholder="demoaccount@gmail.com" />
            </Label>
          
          </FormRow>
          <SubmitButton>Get consultation </SubmitButton>
        </ContactForm>
      </ContentWrapper>
      <Image src={Image1} alt="Image" />
    </Container>
  
  );
};

export default Content;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: rgb(241, 245, 247);
  justify-content: space-between;
  padding: 2rem;
  gap: 2rem;
  top: 80px; /* Adjusted top positioning */
  position: relative; /* Ensure the top offset works */
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    top: 70px;
    padding: 1rem; /* Adjust padding for smaller screens */
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
  max-width: 50%; 
  margin-right: 2rem; /* Add margin to separate from image */

  @media (max-width: 768px) {
    max-width: 100%;
    margin-right: 0; /* Remove margin for smaller screens */
    text-align: center; /* Center-align text on smaller screens */
  }
`;

const StyledH1 = styled.h1`
  color: #333; 
  font-size: 2rem;
  line-height: 1.2;

  strong {
    color: orange; /* Change to your preferred color for the strong tag */
  }

  span {
    font-weight: 500;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem; /* Adjust font size for smaller screens */
  }
`;

const StyledP = styled.p`
  color: #666; /* Change to your preferred color */
  font-size: 1rem;
  line-height: 1.4;

  span {
    color: orange; /* Change to your preferred color for the span tag */
    font-weight: bold;
  }

  strong {
    color: green; /* Change to your preferred color for the strong tag */
  }

  @media (max-width: 768px) {
    font-size: 0.875rem; /* Adjust font size for smaller screens */
    text-align: center; /* Center-align text on smaller screens */
  }
`;

const Image = styled.img`
  flex: 1;
  max-width: 50%; /* Adjust as needed */
  width: 100%;
  height: auto;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    max-width: 100%; /* Ensure the image fits well on smaller screens */
    transform: scale(0.9); /* Slightly reduce size for better fit */
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 580px;
  margin: 0 auto;
 border-radius: 10px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding:1rem;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Label = styled.label`
  flex: 1;
  display: flex;
  flex-direction: column;

`;

const Input = styled.input`
  padding: 0.3rem;
  font-size: 1rem;
  border: 1px solid #fff;
   border-radius: 10px;
  background-color: white;
  width:200px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SubmitButton = styled.button`
  padding: 0.75rem;
  font-size: 1rem;
  color: #fff;
  background-color: #00C000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
