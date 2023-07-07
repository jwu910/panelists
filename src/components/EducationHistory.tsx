import StyledGradient from "./StyledGradient";

export type Education = {
  school: string;
  focus: string;
  year: string;
};

interface Props {
  educationHistory: Education[];
}

const EducationHistory = (props: Props) => {
  return (
    <>
      <h2>Education history</h2>
      <ul>
        {props.educationHistory &&
          props.educationHistory.map((education) => (
            <li key={`${education.school}-${education.year}`}>
              <p>
                {education.year} -{" "}
                <StyledGradient>{education.school}</StyledGradient> -{" "}
                {education.focus}
              </p>
            </li>
          ))}
      </ul>
    </>
  );
};

export default EducationHistory;
