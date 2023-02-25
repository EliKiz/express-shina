import { YmapItemList } from "fetures/YmapItemList";
import { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { dataAddress } from "widgets/Map/ui/Map";

import cls from "./YmapItem.module.scss";

export interface YmapItem {
    className?: string;
    data: dataAddress[];
    focusNewdAddress: (adr: dataAddress) => void;
}

export const YmapItem = ({ className, data, focusNewdAddress }: YmapItem) {
    const [selectedAddress, setSelectedAddress] = useState<dataAddress>();
    const handleSet = (address: dataAddress) => {
        setSelectedAddress({ ...address });
        focusNewdAddress(selectedAddress);
    };

    const budgetsContent = data.map((item: dataAddress, index) => {
        const id = index.toString();
        return (
            <div
                role="button"
                tabIndex={0}
                onKeyDown={() => handleSet(item)}
                onClick={() => handleSet(item)}
                className={cls.Wrapper}>
                <div
                    className={classNames(
                        cls.WrapperInfo,
                        {
                            [cls.active]:
                                item.address === selectedAddress?.address,
                        },
                        []
                    )}>
                    <div className={cls.Street}>{item.address}</div>
                    <ul className={cls.Budgets}>
                        <YmapItemList key={id} className="" data={item} />
                    </ul>
                </div>
            </div>
        );
    });

    return (
        <div className={classNames(cls.YmapItem, {}, [className])}>
            {budgetsContent}
        </div>
    );
}


