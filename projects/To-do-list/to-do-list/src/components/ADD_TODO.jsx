function ADD_TODO() {
  return (
    <div class="container text-center">
      <div class="row myrow">
        <div class="col-6">
          <input type="text" placeholder="Enter TO-DO list..." />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2 AddButton">
          <button type="button" class="btn btn-danger myButton">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}
export default ADD_TODO;
