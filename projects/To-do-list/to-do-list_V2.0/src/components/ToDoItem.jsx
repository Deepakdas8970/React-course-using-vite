function ToDoItem1({name,date}) {
  return (
    <div class="row myrow">
      <div class="col-6">{name}</div>
      <div class="col-4">{date}</div>
      <div class="col-2">
        <button type="button" class="btn btn-warning myButton">
          Delete
        </button>
      </div>
    </div>
  );
}
export default ToDoItem1;
