import { YmapItem } from "fetures/YmapItem";
import { classNames } from "shared/lib/classNames/classNames";
import { PageError } from "widgets/PageError";
import ymaps from "ymaps";

import cls from "./Ymap.module.scss";

export interface YmapProps {
    className?: string;
    location: number[];
    zoomLevel?: number;
}

export const Ymap = ({ className, location, zoomLevel = 15 }: YmapProps) => {
    ymaps
        .load('https://api-maps.yandex.ru/2.1/?lang=ru_RU')
        .then(
            (maps: {
                Map: new (
                    arg0: string,
                    arg1: { center: number[]; zoom: number }
                ) => Promise<void>;
            }) => {
                console.log(location, 'location')
                const map = new maps.Map("yMap", {
                    center: location,
                    zoom: zoomLevel,
                });
            }
        )
        .catch(() => <PageError />);

    return (
        <div id="yMap" className={classNames(cls.Map, {}, [className])}>
            {/*  */}
        </div>
    );
};

