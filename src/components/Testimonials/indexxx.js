import React from "react";
import styled, { keyframes } from "styled-components";

const testimonials = [
  // Row 1
  {
    feedback: "Dinesh is an amazing team player.",
    name: "Alice Johnson",
    designation: "Software Engineer",
  },
  {
    feedback: "Superb problem-solving skills!",
    name: "Bob Smith",
    designation: "Frontend Developer",
  },
  {
    feedback:
      "Dinesh is passionate, hardworking, and always strives for excellence.",
    name: "Sudharshan G",
    designation: "UI/UX Designer",
  },
  {
    feedback: "His code quality is top-notch.",
    name: "David Kim",
    designation: "Backend Developer",
  },
  {
    feedback: "Creative and technically strong.",
    name: "Ella Brown",
    designation: "Full Stack Dev",
  },
  {
    feedback: "Great leadership potential.",
    name: "Frank Green",
    designation: "Project Manager",
  },
  // Row 2
  {
    feedback: "A true asset to the team.",
    name: "Grace Park",
    designation: "DevOps Engineer",
  },
  {
    feedback: "Fantastic communicator.",
    name: "Henry Adams",
    designation: "Scrum Master",
  },
  {
    feedback: "Understands product vision deeply.",
    name: "Isla Moore",
    designation: "Product Manager",
  },
  {
    feedback: "Quick to grasp new technologies.",
    name: "Jack Wilson",
    designation: "QA Analyst",
  },
  {
    feedback: "Code reviews are super helpful.",
    name: "Karen Davis",
    designation: "Tech Lead",
  },
  {
    feedback: "Mentors juniors really well.",
    name: "Liam Carter",
    designation: "Senior Developer",
  },
  // Row 3
  {
    feedback: "Strong debugging skills.",
    name: "Mia Scott",
    designation: "Frontend Intern",
  },
  {
    feedback: "Writes clean, maintainable code.",
    name: "Noah White",
    designation: "Backend Intern",
  },
  {
    feedback: "Super passionate about tech.",
    name: "Olivia Young",
    designation: "UI Intern",
  },
  {
    feedback: "Always delivers on time.",
    name: "Paul Hall",
    designation: "React Developer",
  },
  {
    feedback: "Handles pressure well.",
    name: "Quinn Allen",
    designation: "Cloud Engineer",
  },
  {
    feedback: "Very collaborative and open-minded.",
    name: "Rachel King",
    designation: "Mobile Developer",
  },
  // Row 4
  {
    feedback: "He’s proactive and dependable.",
    name: "Sophie Gray",
    designation: "Dev Intern",
  },
  {
    feedback: "His feedback improved our product.",
    name: "Tom Hill",
    designation: "UI Lead",
  },
  {
    feedback: "Extremely detail-oriented.",
    name: "Uma Patel",
    designation: "Test Engineer",
  },
  {
    feedback: "Great at documentation.",
    name: "Victor Cruz",
    designation: "Technical Writer",
  },
  {
    feedback: "Picks up tools quickly.",
    name: "Wendy Fox",
    designation: "Software Trainee",
  },
  {
    feedback: "Empathetic leader.",
    name: "Xander Ray",
    designation: "Engineering Manager",
  },
];

const TestimonialContainer = styled.div`
  width: 100%;
  background-color: #121829;
  padding: 60px 20px;
  position: relative;
  overflow: hidden;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 80px;
    height: 100%;
    z-index: 2;
    pointer-events: none;
  }

  &::before {
    left: 0;
    background: linear-gradient(to right, #121829, transparent);
  }

  &::after {
    right: 0;
    background: linear-gradient(to left, #121829, transparent);
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 36px;
  color: #e2ecf9;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: 18px;
  color: #9eb5d1;
  margin-bottom: 50px;
`;

const RowWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  margin-bottom: 30px;
`;

const scrollLeft = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const scrollRight = keyframes`
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
`;

const ScrollRow = styled.div`
  display: flex;
  width: fit-content;
  animation: ${({ reverse }) => (reverse ? scrollRight : scrollLeft)} 40s linear
    infinite;
  gap: 20px; // Added gap between cards
`;

const Card = styled.div`
  background-color: #1a2238;
  border-radius: 12px;
  padding: 20px;
  min-width: 300px; // Removed margin
  flex-shrink: 0;
  color: #c5d1eb;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    min-width: 250px;
    padding: 16px;
    height: 140px;
  }
`;
const Feedback = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  color: #e2ecf9;
`;

const Name = styled.p`
  font-weight: bold;
  color: #4a90e2;
`;

const Designation = styled.p`
  font-size: 14px;
  color: #809ec2;
`;

const TestimonialSection = () => {
  return (
    <TestimonialContainer id="testimonials">
      <Title>Testimonials</Title>
      <Subtitle>What people say about working with me</Subtitle>
      {[0, 1, 2].map((rowIndex) => (
        <RowWrapper key={rowIndex}>
          <ScrollRow reverse={rowIndex % 2 !== 0}>
            {[
              ...testimonials.slice(rowIndex * 6, (rowIndex + 1) * 6),
              ...testimonials.slice(rowIndex * 6, (rowIndex + 1) * 6),
            ].map((t, idx) => (
              <Card key={`${rowIndex}-${idx}`}>
                <Feedback>"{t.feedback}"</Feedback>
                <Name>{t.name}</Name>
                <Designation>{t.designation}</Designation>
              </Card>
            ))}
          </ScrollRow>
        </RowWrapper>
      ))}
    </TestimonialContainer>
  );
};

export default TestimonialSection;
