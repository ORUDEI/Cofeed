

interface Props {
    name: string;
    colour?: string;
}

export const FeedLinks = ({name,colour="text-gray-400 hover:text-gray-500"}:Props) => {


  return (
    <>
    <a href="#" className={`font-bold ${colour}`}>{name}</a>
    </>
  )
}
