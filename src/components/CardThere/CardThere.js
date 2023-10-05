import styles from './CardThere.module.css';
import DetailsPart from "../DetailsPart/DetailsPart";
import {useSelector} from "react-redux";

export default function CardThere() {
    const departureCity = useSelector((state) => state.departureCity);
    const arrivalCity = useSelector((state) => state.arrivalCity);
    const departureDate = useSelector((state) => state.departureDate);
    const departureDateFormat = departureDate.toISOString().slice(0, 10).split('-').reverse().join('.');

    const departureHours = useSelector(state => state.departureHours);

    return (
        <div className={styles.cardThere}>
            <DetailsPart departureCity={departureCity}
                         arrivalCity={arrivalCity}
                         departureDate={departureDateFormat}
                         departureHours={departureHours[0]}
                         arrivalHours={departureHours[1]}
                         isChangeTime={true}
            />
            <div className={styles.pricePart}>
                4 150 ₽
            </div>
        </div>
    );
}