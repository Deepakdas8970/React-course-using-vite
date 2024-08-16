//second way of passing props in components

const Card2 = ({name,age}) => {
  return (
    <>
      <div class="card border-dark mb-3">
      <div class="card-header">{name}</div>
        <div class="card-body">
          <h5 class="card-title">Dark card title {age}</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </>
  );
};
export default Card2;
