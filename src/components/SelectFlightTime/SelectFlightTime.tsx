import styles from "./SelectFlightTime.module.css";
import {FC} from "react";
import {useAppDispatch} from "../../utils/hooks";
import {changeDepartureHours} from "../../utils/actions";

export const SelectFlightTime: FC = () => {
    const dispatch = useAppDispatch();
    const timesA: string[] = ['09:20', '11:05'];
    const timesB: string[] = ['10:20', '12:05'];
    const timesC: string[] = ['11:20', '13:05'];
    return (
        <div className={styles.selectFlightTime}>
            <button id='1' className={styles.selectFlightTimeButton}
                    onClick={() => dispatch(changeDepartureHours(timesA))}
            >
                09:20 - 11:05
            </button>
            <button id='2' className={styles.selectFlightTimeButton}
                    onClick={() => dispatch(changeDepartureHours(timesB))}
            >
                10:20 - 12:05
            </button>
            <button id='3' className={styles.selectFlightTimeButton}
                    onClick={() => dispatch(changeDepartureHours(timesC))}
            >
                11:20 - 13:05
            </button>
        </div>
    );
}