import Button from "./Button";

const Buttons = () => {
  let arr = [
    "C",
    "%",
    "Del",
    "/",
    "7",
    "8",
    "9",
    "x",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "00",
    "0",
    ".",
    "=",
  ];

  return (
    <>
      <div class="container text-center ">
        <div class="row">
          <Button items={arr}></Button>
        </div>
      </div>
    </>
  );
};
export default Buttons;
