import Button from "./Button";

const Buttons = ({ setNum, num }) => {

  const pressKey = (e) => {
    const key = e.target.innerHTML;
    if (key === "C") {
      setNum("");
    } else if (key === "=") {

      const modifiedNum = num.replace(/x/g, "*"); // Replace x with *
      const result=eval(modifiedNum);
      setNum(result);

    }
    else if (key==="Del") {
      setNum(num.slice(0, -1));
    }
     else {
      let newNum=num+key;
      setNum(newNum);
    }
  };

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
          <Button items={arr} pressKey={pressKey}></Button>
        </div>
      </div>
    </>
  );
};
export default Buttons;
