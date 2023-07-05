interface Props {
  children?: React.ReactNode;
  text?: string;
}

const StyledGradient = (props: Props) => {
  return <span className="text-gradient">{props.text || props.children}</span>;
};

export default StyledGradient;
