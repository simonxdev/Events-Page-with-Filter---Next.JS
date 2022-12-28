import Link from "next/link";
import styles from './EventItem.module.css';
import Button from "../ui/Button";
import DateIcon from "../ui/icons/date-icon"
import AddressIcon from "../ui/icons/address-icon";
import ArrowRightIcon from "../ui/icons/arrow-right-icon";


function EventItem(props) {
  const { title, image, date, location, id } = props;
  const humanReadableDate = new Date(date).toLocaleString("de-DE", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });
  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li className={styles.item}>
      <img src={'/' + image} alt={title} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button buttonlink={exploreLink}> 
            <span>Explore Event</span>
            <span className={styles.icon}><ArrowRightIcon /></span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
