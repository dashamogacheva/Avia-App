import styles from "./DetailsPart.module.css";
import logo from "../../icons/logo.svg";
import bag from '../../icons/bag.svg';
import baggage from '../../icons/baggage.svg';

export default function DetailsPart({departureCity, arrivalCity, departureDate, isChangeTime}) {
    return (
        <div className={styles.detailsPart}>
            <div className={styles.typeOfTicket}>
                Невозвратный
            </div>
            <div className={styles.details}>
                <div className={styles.airline}>
                    <img className={styles.airlineLogo} src={logo} alt="airline logo"/>
                    S7 Airlines
                </div>
                <div className={styles.flightSection}>
                    <div className={styles.flightDetails}>
                        <div className={styles.departureDetails}>
                            <span className={styles.timeFlightStyle}>09:20</span>
                            <span className={styles.cityFlightStyle}>{departureCity}</span>
                            <span className={styles.dateFlightStyle}>{departureDate}</span>
                        </div>
                        <div className={styles.flightPlan}>
                            <div className={styles.plan}>
                                <span>SVO</span>
                                <span>ROV</span>
                            </div>
                            <div className={styles.travelTime}>
                                В пути 1 ч 55 мин
                            </div>
                        </div>
                        <div className={styles.departureDetails}>
                            <span className={styles.timeFlightStyle}>11:05</span>
                            <span className={styles.cityFlightStyle}>{arrivalCity}</span>
                            <span className={styles.dateFlightStyle}>{departureDate}</span>
                        </div>
                        <div>
                            <img className={styles.bag} src={bag} alt="bag"/>
                            <img src={baggage} alt="baggage"/>
                        </div>
                    </div>
                    {isChangeTime ? (
                            <div className={styles.selectFlightTime}>
                                <button className={styles.selectFlightTimeButton}
                                    // onClick={handleChangeButtonStyle}
                                >
                                    09:20 - 11:05
                                </button>
                                <button className={styles.selectFlightTimeButton}>
                                    10:20 - 12:05
                                </button>
                                <button className={styles.selectFlightTimeButton}>
                                    11:20 - 13:05
                                </button>
                            </div>
                        ) : <></>
                    }
                </div>
            </div>
        </div>
    );
}