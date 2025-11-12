import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { Snackbar } from "@mui/material";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid
    ${({ isInvalid, theme }) => (isInvalid ? "red" : theme.text_secondary)};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  transition: all 0.2s ease-in-out;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid
    ${({ isInvalid, theme }) => (isInvalid ? "red" : theme.text_secondary)};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  transition: all 0.2s ease-in-out;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(221, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(221, 100%, 50%, 1) 0%,
    hsla(234, 100%, 50%, 1) 100%
  );
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    filter: brightness(1.2);
    transform: scale(1.05);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    filter: none;
    background: ${({ theme }) => theme.button_disabled}
`;

const ErrorText = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 4px;
  text-align: center;
`;

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const [touched, setTouched] = useState({});
  const form = useRef();

  const [formData, setFormData] = useState({
    from_email: "",
    name: "",
    subject: "",
    message: "",
  });

  // ✅ Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Track if user touched a field (for red border)
  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const isFieldInvalid = (field) => {
    if (!touched[field]) return false;
    if (field === "from_email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return !emailPattern.test(formData.from_email);
    }
    return !formData[field].trim();
  };

  const isFormComplete =
    formData.from_email &&
    formData.name &&
    formData.subject &&
    formData.message;

  // ✅ Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormComplete) {
      setError("Please fill out all fields before sending!");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.from_email)) {
      setError("Please enter a valid email address!");
      return;
    }

    setError("");

    emailjs
      .sendForm(
        "service_xzy587d",
        "template_ykocajr",
        form.current,
        "lZKRKYu1RQxPaK7Zz"
      )
      .then(
        () => {
          setOpen(true);
          form.current.reset();
          setFormData({
            from_email: "",
            name: "",
            subject: "",
            message: "",
          });
          setTouched({});
        },
        (error) => {
          console.log(error.text);
          setError("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>
          Feel free to reach out to me for any questions or opportunities!
        </Desc>

        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>

          <ContactInput
            placeholder="Your Email"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={isFieldInvalid("from_email")}
          />
          <ContactInput
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={isFieldInvalid("name")}
          />
          <ContactInput
            placeholder="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={isFieldInvalid("subject")}
          />
          <ContactInputMessage
            placeholder="Message"
            rows="4"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={isFieldInvalid("message")}
          />

          {error && <ErrorText>{error}</ErrorText>}

          <ContactButton
            type="submit"
            value="Send"
            disabled={!isFormComplete}
          />
        </ContactForm>

        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
        />
      </Wrapper>
    </Container>
  );
};

export default Contact;
