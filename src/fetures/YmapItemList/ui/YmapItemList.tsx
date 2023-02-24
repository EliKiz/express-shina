import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import { dataAddress } from "widgets/Map/ui/Map";

import cls from "./YmapItemList.module.scss";

export interface YmapItemListProps {
    className?: string;
    data: dataAddress;
}

export const YmapItemList = ({ className, data }: YmapItemListProps) => {
    return (
        <>
            {data.budgets.map((item: string, index:any) => {
                return (
                    <li key={index} className={cls.BudgetsItem}>
                        <Button
                            key={index}
                            id={index.toString()}
                            className={cls.Button}>
                            {item}
                        </Button>
                    </li>
                );
            })}
        </>
    );
};

