import styles from './RoundTripCard.module.css';
import DetailsPart from "../DetailsPart";
import {FC} from "react";
import {useTypedSelector} from "../../utils/hooks";
export const RoundTripCard:FC = () => {
    const { departureCity, arrivalCity, departureDate, arrivalDate, departureHours } = useTypedSelector((state) => state);
    const departureDateFormat:string = departureDate.toISOString().slice(0,10).split('-').reverse().join('.');
    let arrivalDateFormat:string = '';
    if (arrivalDate) {
        arrivalDateFormat = arrivalDate.toISOString().slice(0,10).split('-').reverse().join('.');
    }
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
                           departureHours={departureHours[0]}
                           arrivalHours={departureHours[1]}
                           isChangeTime={false}
              />
          </div>
          <div className={styles.pricePart}>
              8 300 ₽
          </div>
      </div>
    );
}