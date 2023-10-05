import styles from './RoundTripCard.module.css';
import DetailsPart from "../DetailsPart/DetailsPart";
import {useSelector} from "react-redux";
export default function RoundTripCard () {
    const departureCity = useSelector((state) => state.departureCity);
    const arrivalCity = useSelector((state) => state.arrivalCity);
    const departureDate = useSelector((state) => state.departureDate);
    const arrivalDate = useSelector((state) => state.arrivalDate);
    const departureHours = useSelector(state => state.departureHours);
    const departureDateFormat = departureDate.toISOString().slice(0,10).split('-').reverse().join('.');
    const arrivalDateFormat = arrivalDate.toISOString().slice(0,10).split('-').reverse().join('.');
    return (
      <div className={styles.roundTripCard}>
          <div className={styles.detailsPart}>
              <DetailsPart departureCity={departureCity}
                           arrivalCity={arrivalCity}
                           departureDate={departureDateFormat}
                           departureHours={departureHours[0]}
                           arrivalHours={departureHours[1]}
                           isChangeTime={false}
              />
              <DetailsPart departureCity={arrivalCity}
                           arrivalCity={departureCity}
                           departureDate={arrivalDateFormat}
                           departureHours={departureHours[1]}
                           arrivalHours={departureHours[0]}
                           isChangeTime={false}
              />
          </div>
          <div className={styles.pricePart}>
              8 300 ₽
          </div>
      </div>
    );
}