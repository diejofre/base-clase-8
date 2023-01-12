import { FaArrowRight } from "react-icons/fa";

const Item = function ({ name, description, score }) {
  return (
    <li>
      <FaArrowRight />
      <strong>{name}</strong>
      <small>- {description}</small>
      <em>score: {score}</em>
    </li>
  );
};

export default Item;
