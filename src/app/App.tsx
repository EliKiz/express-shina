import { Suspense } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { Navbar } from "widgets/Navbar";
import { YMaps } from "react-yandex-maps";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { Map } from "widgets/Map";

import "./styles/index.scss";

function App() {
    const { theme } = useTheme();
    return (
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback="">
                <YMaps>
                    <Navbar />
                    <div className="content-page">
                        <ThemeSwitcher className="padding: 20p" />
                        <div className="content-page-map">
                            <Map className="" />
                        </div>
                    </div>
                </YMaps>
            </Suspense>
        </div>
    );
}

export default App;

