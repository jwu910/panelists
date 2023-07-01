import TitleAndCompany from "./TitleAndCompany";

type JobHistory = {
  company: string;
  title: string;
};

interface Props {
  jobHistory: JobHistory[];
}

const JobHistory = (props: Props) => {
  return (
    <ul>
      {props.jobHistory.map((jobHistory) => (
        <TitleAndCompany
          title={jobHistory.title}
          company={jobHistory.company}
        />
      ))}
    </ul>
  );
};

export default JobHistory;
