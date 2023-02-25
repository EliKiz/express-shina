import { classNames } from "shared/lib/classNames/classNames";
import { Map as Ymap, Placemark } from "react-yandex-maps";
import { YmapItem } from "fetures/YmapItem";

import { useCallback, useEffect, useState } from "react";
import { ymapService } from "fetures/YmapItem/service/YmapService";
import cls from "./Map.module.scss";

export interface dataAddress {
    address: string;
    budgets: string[];
    latitude: number;
    longitude: number;
}

export interface MapProps {
    className?: string;
    location?: any;
    zoomLevel?: number;
}

export const Map = ({ className, location, zoomLevel = 15 }: MapProps) => {
    const [budgets, setBudgets] = useState<dataAddress[]>(() => []);
    const [addresss, setAddress] = useState<dataAddress>();


    useEffect(() => {
        ymapService("http://localhost:8000/pickPoints")
            .then((res) => setBudgets(res))
            .catch((err) => console.error(err));
    }, []);

    const placesMarks = budgets.map((item) => {
        return <Placemark geometry={[item.latitude, item.longitude]} />;
    });

    const focusNewdAddress = useCallback(
        (adr: dataAddress) => {
            setAddress(adr);
        },
        [addresss]
    );

    return (
        <>
            <YmapItem
                className=""
                data={budgets}
                focusNewdAddress={focusNewdAddress}
            />
            <Ymap
                className={classNames(cls.Map, {}, [className])}
                state={{
                    center: !addresss
                        ? [56.80245, 60.604913]
                        : [addresss.latitude, addresss.longitude],
                    zoom: 15,
                    controls: ["zoomControl", "fullscreenControl"],
                }}
                modules={["control.ZoomControl", "control.FullscreenControl"]}>
                {placesMarks}
            </Ymap>
        </>
    );
};

