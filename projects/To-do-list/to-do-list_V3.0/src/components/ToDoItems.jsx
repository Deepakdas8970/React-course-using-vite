import ToDoItem from "./ToDoItem"
const ToDoItems = ({ newData}) => {
  return (
    <>
      <div class="container">
        {/* nested components and props passing  as a array format  */}
        
        {newData.map((item)=>( <ToDoItem name={item.name} date={item.date} />))}

        
      </div>
    </>
  );
};
export default ToDoItems;
