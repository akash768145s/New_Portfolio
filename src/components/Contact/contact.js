"use client";
import { useState } from "react";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 48px 0;
  margin: 0 auto;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  background-color: #0f1624;
  height: 100vh;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 16px 16px 0;
    width: calc(100vw - 32px);
  }
`;

const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: 56px;
  line-height: 67px;
  width: max-content;
  max-width: 100%;
  background: linear-gradient(
    121.57deg,
    #ffffff 18.77%,
    rgba(255, 255, 255, 0.66) 60.15%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 48px;
    line-height: 48px;
    margin-bottom: 12px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 8px;
  }
`;

const SectionText = styled.p`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`;

const FormWrapper = styled.div`
  background: #0f1624;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  background: #0f1624;
  color: #fff;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.12);

  &:focus {
    outline: none;
    border-color: #13adc7;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    padding: 10px 12px;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 12px 15px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  resize: vertical;
  background: #0f1624;
  color: #fff;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.12);

  &:focus {
    outline: none;
    border-color: #13adc7;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    padding: 10px 12px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  background: linear-gradient(270deg, #00dbd8 0%, #b133ff 100%);
  border: none;
  color: white;
  padding: 12px 20px;
  border-radius: 25px;
  font-size: 18px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
     background: linear-gradient(270deg, #00dbd8 0%, #b133ff 150%);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    padding: 10px 18px;
  }
`;

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:sakthimuruganakash@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=Hi Akash,%0A%0AName: ${encodeURIComponent(
      formData.name
    )}. ${encodeURIComponent(
      formData.subject
    )} %0A%0AEmail: ${encodeURIComponent(
      formData.email
    )}%0APhone:${encodeURIComponent(formData.phone)}%0A%0A ${encodeURIComponent(
      formData.message
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <Section id="contact">
      <div className="text-center mb-14">
        <SectionTitle>Contact Me</SectionTitle>
        <SectionText>
          Wanna Hire Me?
        </SectionText>
      </div>
      <FormWrapper>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Your Name"
            id="name"
            name="name"
            onChange={handleChange}
          />
          <Input
            type="email"
            placeholder="Email Address"
            id="email"
            name="email"
            onChange={handleChange}
          />
          <Input
            type="text"
            placeholder="Subject"
            id="subject"
            name="subject"
            onChange={handleChange}
          />
          <Input
            type="tel"
            placeholder="Phone Number"
            id="phone"
            name="phone"
            onChange={handleChange}
          />
          <Textarea
            placeholder="Type your Message..."
            name="message"
            id="message"
            rows="5"
            onChange={handleChange}
          ></Textarea>
          <ButtonWrapper>
            <Button type="submit">Submit</Button>
          </ButtonWrapper>
        </form>
      </FormWrapper>
    </Section>
  );
};

export default ContactSection;
