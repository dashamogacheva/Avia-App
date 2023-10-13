import CardThere from "../../components/CardThere";
import RoundTripCard from "../../components/RoundTripCard";
import {FC} from "react";
import {useTypedSelector} from "../../utils/hooks";

export const InfoPage:FC = () => {
    const arrivalDate = useTypedSelector((state) => state.arrivalDate);
    if (arrivalDate !== null) {
        return (
            <RoundTripCard/>
        );
    } else {
        return (
            <CardThere/>
        );
    }
}