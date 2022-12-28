import Link from "next/link";
import styles from "./Button.module.css";

const Button = (props) => {
  const { buttonlink } = props;
  return <Link className={styles.btn} href={buttonlink}>{props.children}</Link>;
};

export default Button;
