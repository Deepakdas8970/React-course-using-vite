const Input = ({display}) => {

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 border mb-1">
            <input
              type="text"
              className="w-100  fs-1 p-5 bg-black text-white my-1 border-0"
              value={display}
              readOnly
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Input;
