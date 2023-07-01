interface Props {
  text: string;
}

const StyledGradient = (props: Props) => {
  return <span className="text-gradient">{props.text}</span>;
};

export default StyledGradient;