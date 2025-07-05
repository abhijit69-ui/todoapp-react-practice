interface Props {
  list: string[];
}

const List = ({ list }: Props) => {
  return (
    <div className='flex col-auto'>
      <ul>
        <li>{list}</li>
      </ul>
    </div>
  );
};

export default List;
