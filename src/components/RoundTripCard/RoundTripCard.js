import styles from './RoundTripCard.module.css';
import DetailsPart from "../DetailsPart/DetailsPart";
import {useSelector} from "react-redux";
export default function RoundTripCard () {
    const departureCity = useSelector((state) => state.departureCity);
    const arrivalCity = useSelector((state) => state.arrivalCity);
    const departureDate = useSelector((state) => state.departureDate);
    const arrivalDate = useSelector((state) => state.arrivalDate);
    const departureDateFormat = departureDate.toISOString().slice(0,10).split('-').reverse().join('.');
    const arrivalDateFormat = arrivalDate.toISOString().slice(0,10).split('-').reverse().join('.');
    return (
      <div className={styles.roundTripCard}>
          <div className={styles.detailsPart}>
              <DetailsPart departureCity={departureCity}
                           arrivalCity={arrivalCity}
                           departureDate={departureDateFormat}
                           isChangeTime={false}
              />
              <DetailsPart departureCity={arrivalCity}
                           arrivalCity={departureCity}
                           departureDate={arrivalDateFormat}
                           isChangeTime={false}
              />
          </div>
          <div className={styles.pricePart}>
              8 300 ₽
          </div>
      </div>
    );
}