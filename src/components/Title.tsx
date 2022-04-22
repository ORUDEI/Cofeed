
interface Props {
    title: string;
}

const Title = ({title}:Props) => {
  return (
    <>
      <h1 className="font-bold text-blue-900">{title}</h1>
    </>
  );
};

export default Title;
