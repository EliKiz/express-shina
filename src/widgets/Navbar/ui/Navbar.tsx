import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
            <a href="https://hh.ru/employer/1545660">Designed for</a>
        </div>
    </div>
);

