interface Props {
  image: any;
  size?: string;
}

const Image = ({ image, size = "h-64 w-96" }: Props) => {
  return (
    <>
      <a href="#">
        <img
          src={image}
          className={`rounded-2xl border border-white ${size} hover:opacity-80 hover:border-2 hover:border-slate-300`}
        />
      </a>
    </>
  );
};

export default Image;
