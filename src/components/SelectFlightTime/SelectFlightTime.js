import styles from "./SelectFlightTime.module.css";
import {useDispatch} from "react-redux";
import {changeDepartureHours} from "../../utils/actions";
export default function SelectFlightTime() {
    const dispatch = useDispatch();
    const arrayTimes = [
        ['09:20', '11:05'],
        ['10:20', '12:05'],
        ['11:20', '13:05'],
    ]
    return (
        <div className={styles.selectFlightTime}>
            <button className={styles.selectFlightTimeButton}
                    onClick={() => dispatch(changeDepartureHours(arrayTimes[0]))}
            >
                09:20 - 11:05
            </button>
            <button className={styles.selectFlightTimeButton}
                    onClick={() => dispatch(changeDepartureHours(arrayTimes[1]))}
            >
                10:20 - 12:05
            </button>
            <button className={styles.selectFlightTimeButton}
                    onClick={() => dispatch(changeDepartureHours(arrayTimes[2]))}
            >
                11:20 - 13:05
            </button>
        </div>
    );
}