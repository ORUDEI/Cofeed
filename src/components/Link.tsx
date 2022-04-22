interface Props {
    name: string;
    colour?: string;
}

const Link = ({name, colour="text-gray-400 hover:text-gray-500"}:Props) => {

  return (
    <>
    <a href="#" className={`${colour} font-bold`}>{name}</a>
    </>
  )
}

export default Link;
