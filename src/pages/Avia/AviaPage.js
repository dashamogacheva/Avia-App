import styles from './AviaPage.module.css';
import {Link} from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useDispatch, useSelector} from "react-redux";
import {changeArrivalCity, changeArrivalDate, changeDepartureCity, changeDepartureDate} from "../../utils/actions";
import {useEffect, useState} from "react";

export default function AviaPage() {
    const departureCity = useSelector((state) => state.departureCity);
    const arrivalCity = useSelector((state) => state.arrivalCity);
    const departureDate = useSelector((state) => state.departureDate);
    const arrivalDate = useSelector((state) => state.arrivalDate);
    const dispatch = useDispatch();

    function handleChangeDepartureCity (event) {
        if (event.target.value.trim() !== '') {
            dispatch(changeDepartureCity(event.target.value));
        }
    }

    function handleChangeArrivalCity (event) {
        if (event.target.value.trim() !== '') {
            dispatch(changeArrivalCity(event.target.value));
        }
    }

    const [btnDisabled, setBtnDisabled] = useState(true);

    useEffect(() => {
        function handleCheckBtnDisabled () {
            if (departureCity.trim() !== '' && arrivalCity.trim() !== '' && departureDate !== null) {
                setBtnDisabled(false);
            } else {
                setBtnDisabled (true);
            }
        }
        handleCheckBtnDisabled();
    }, );

    return (
        <div className={styles.searchForm}>
            <div className={styles.searchFormHeader}>
                <div className={styles.styleForLabelForm}>
                    <label className={styles.styleForLabel}>Откуда</label>
                    <input className={styles.inputStyles} type="text" name="firstname"
                           placeholder="Город вылета"
                           onChange={handleChangeDepartureCity}
                    ></input>
                </div>
                <div className={styles.styleForLabelForm}>
                    <label className={styles.styleForLabel}>Куда</label>
                    <input className={styles.inputStyles} type="text" name="firstname"
                           placeholder="Город прилета"
                           onChange={handleChangeArrivalCity}
                    ></input>
                </div>
                <div className={styles.styleForLabelForm}>
                    <label className={styles.styleForLabel}>Туда</label>
                    <DatePicker className={styles.inputStyles} selected={departureDate}
                                dateFormat='dd/MM/yyyy'
                                minDate={departureDate}
                                required
                                onChange={(date) => dispatch(changeDepartureDate(date))}/>
                </div>
                <div className={styles.styleForLabelForm}>
                    <label className={styles.styleForLabel}>Обратно</label>
                    <DatePicker className={styles.inputStyles} selected={arrivalDate}
                                dateFormat='dd/MM/yyyy'
                                minDate={departureDate}
                                onChange={(date) => dispatch(changeArrivalDate(date))}/>
                </div>
            </div>
            <div className={styles.searchButtonForm}>
                <Link to={`/info`} style={{textDecoration: 'none'}}>
                    <button className={styles.searchButton}
                        disabled={btnDisabled}
                    >
                        Найти билеты
                    </button>
                </Link>
            </div>
        </div>
    );
}