import ToDoItem from "./ToDoItem"
const ToDoItems = ({data}) => {
  return (
    <>
      <div class="container">
        {/* nested components and props passing  as a array format  */}
        
        {data.map((item)=>( <ToDoItem name={item.name} date={item.date} />))}

        
      </div>
    </>
  );
};
export default ToDoItems;
