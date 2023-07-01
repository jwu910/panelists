interface Props {
  text: string;
}

const StyledGradient = (props: Props) => {
  return <span class="text-gradient">{props.text}</span>;
};

export default StyledGradient;