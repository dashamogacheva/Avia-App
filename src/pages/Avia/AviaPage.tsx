import styles from './AviaPage.module.css';
import {Link} from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {ChangeEvent, FC, useEffect, useState} from "react";
import {useAppDispatch, useTypedSelector} from "../../utils/hooks";
import {
    changeArrivalCity,
    changeArrivalDate,
    changeDepartureCity,
    changeDepartureDate
} from "../../utils/actions";

export const AviaPage:FC = () => {
    const [btnDisabled, setBtnDisabled] = useState<boolean>(true);
    const { departureCity, arrivalCity, departureDate, arrivalDate }= useTypedSelector((state) => state);
    const dispatch = useAppDispatch();

    function handleChangeDepartureCity(event: ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        if (event.target.value.trim() !== '') {
            dispatch(changeDepartureCity(event.target.value));
        }
    }

    function handleChangeArrivalCity (event: ChangeEvent<HTMLInputElement>) {
        if (event.target.value.trim() !== '') {
            dispatch(changeArrivalCity(event.target.value));
        }
    }

    useEffect (() => {
        function handleCheckBtnDisabled() {
            if (departureCity.trim() !== '' && arrivalCity.trim() !== '' && departureDate) {
                setBtnDisabled(false);
            } else {
                setBtnDisabled(true);
            }
        }
        handleCheckBtnDisabled();
    })

    return (
        <div className={styles.searchForm}>
            <div className={styles.searchFormHeader}>
                <div className={styles.styleForLabelForm}>
                    <label className={styles.styleForLabel}>* Откуда</label>
                    <input className={styles.inputStyles} type="text" name="firstname"
                           placeholder="Город вылета"
                           onChange={handleChangeDepartureCity}
                    ></input>
                </div>
                <div className={styles.styleForLabelForm}>
                    <label className={styles.styleForLabel}>* Куда</label>
                    <input className={styles.inputStyles} type="text" name="firstname"
                           placeholder="Город прилета"
                           onChange={handleChangeArrivalCity}
                    ></input>
                </div>
                <div className={styles.styleForLabelForm}>
                    <label className={styles.styleForLabel}>* Туда</label>
                    <DatePicker className={styles.inputStyles} selected={departureDate}
                                dateFormat='dd/MM/yyyy'
                                minDate={departureDate}
                                required
                                onChange={(date:Date) => dispatch(changeDepartureDate(date))}
                    />
                </div>
                <div className={styles.styleForLabelForm}>
                    <label className={styles.styleForLabel}>Обратно</label>
                    <DatePicker className={styles.inputStyles} selected={arrivalDate}
                                dateFormat='dd/MM/yyyy'
                                minDate={departureDate}
                                onChange={(date:Date) => dispatch(changeArrivalDate(date))}/>
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