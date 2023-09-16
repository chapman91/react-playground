function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const [selectedIndex, setSelectedIndex] = useState(-1); //Destructure array into two elements

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            } //The active class is rendered dynamically
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li> //transformation
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

/**
 *  It's located in the "components"
 *
 *  directory within the same
 *  directory as the file containing the import statement.
 *
 *
 *
 *
 *
 */
