import { MyComponentWrapper } from './styles';

type MyComponentProps = {
  title: string;
};

const MyComponent = ({ title, ...props }: MyComponentProps) => {
  return <MyComponentWrapper {...props}>{title}</MyComponentWrapper>;
};

export default MyComponent;
