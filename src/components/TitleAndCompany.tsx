interface Props {
  company: string;
  title: string;
}

const TitleAndCompany = (props: Props) => {
  return (
    <p>
      {props.title} at <span class="text-gradient">{props.company}</span>
    </p>
  );
};

export default TitleAndCompany;
