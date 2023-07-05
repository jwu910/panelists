import StyledGradient from './StyledGradient';

export type EducationDegree = {
  school: string;
  focus: string;
  year: string;
};

interface Props {
  educationHistory: EducationDegree[];
}

const Education = (props: Props) => {
  return (
    <>
      <h2>Education history</h2>
      <ul>
        {props.educationHistory &&
          props.educationHistory.map((education) => (
            <li>
              <p>
                {education.year} -{' '}
                <StyledGradient>{education.school}</StyledGradient> -{' '}
                {education.focus}
              </p>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Education;
