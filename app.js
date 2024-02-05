// TODO

// const GroceryListItem = (props) => {

//   const onListItemClick = (event) => {
//     console.log('I got clicked')
//   };

//   return (
//     <>
//     <li onClick={onListItemClick}>{props.groceryItem[0]}</li>
//     <li>{props.groceryItem[1]}</li>
//     <li>{props.groceryItem[2]}</li>
//     <li>{props.groceryItem[3]}</li>
//     </>
//   )
// }

const {useState} = React;

const GroceryListItem = (props) => {

  const [isHovered, setIsHovered] = useState(false);

  const style = {
    fontWeight: isHovered ? 'bold' : 'normal',
  };

  // const handleMouseOver = () => {
  //   setIsHovered(true);
  // };

  // const handleMouseOut = () => {
  //   setIsHovered(false);
  // };

  return (
    <li style={style}
    onMouseOver={() => setIsHovered(!isHovered)}
    onMouseOut={() => setIsHovered(!isHovered)}>
      {props.todo}</li>
  );
 }

const GroceryList = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => (
        <GroceryListItem todo={todo} />
      ))}
    </ul>
  );
}

const groceries = ['Milk', 'Eggs', 'Sugar', 'Butter'];
ReactDOM.render(<GroceryList todos={groceries}/>,
document.getElementById('app'))
