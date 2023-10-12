import styles from './CardThere.module.css';
import DetailsPart from "../DetailsPart";
import {FC} from "react";
import {useTypedSelector} from "../../utils/hooks";

export const CardThere: FC = () => {
    const {departureCity, arrivalCity, departureDate, departureHours} = useTypedSelector((state) => state);
    const departureDateFormat: string = departureDate.toISOString().slice(0, 10).split('-').reverse().join('.');
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