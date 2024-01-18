import style from "./index.module.css";

export default function Nav() {
  return (
    <nav className={style.nav}>
      <h2>HammadDev</h2>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
