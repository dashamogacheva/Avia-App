import CardThere from "../../components/CardThere/CardThere";
import RoundTripCard from "../../components/RoundTripCard/RoundTripCard";
import {useSelector} from "react-redux";

export default function InfoPage() {
    const arrivalDate = useSelector((state) => state.arrivalDate);
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