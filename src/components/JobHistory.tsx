import TitleAndCompany from "./TitleAndCompany";
import StyledGradient from "./StyledGradient";

type JobHistory = {
  company: string;
  title: string;
};

interface Props {
  currentEmployer: string;
  currentTitle: string;
  jobHistory: JobHistory[];
}

const JobHistory = (props: Props) => {
  return (
    <>
      <h2>
        <StyledGradient text={props.currentTitle} /> at{" "}
        <StyledGradient text={props.currentEmployer} />
      </h2>
      <h2>Tech Journey</h2>
      <ul>
        {props.jobHistory.map((jobHistory) => (
          <li key={`${jobHistory.title}-${jobHistory.company}`}>
            <TitleAndCompany
              title={jobHistory.title}
              company={jobHistory.company}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default JobHistory;
