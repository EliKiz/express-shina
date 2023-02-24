import { classNames } from "shared/lib/classNames/classNames";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";
import cls from "./LocationPin.module.scss";

interface LocationPin {
    text: string;
    className?: string;
    lat: number;
    lng: number;
}

export const LocationPin = ({ className, lat, lng, text }: LocationPin) => {
    return (
        <div className={classNames(cls.LocationPin, {}, [className])}>
            <Icon icon={locationIcon} className="pin-icon" />
            <p className="pin-text">{text}</p>
        </div>
    );
};

