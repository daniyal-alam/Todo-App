import style from "./index.module.css";

export default function Card(props) {
  const { name, price, children } = props; // name, price are custom components.
  return (
    <div className={style.card}>
      <h3>
        {name} - ${price}{" "}
      </h3>
      <p>{children}</p>
    </div>
  );
}
