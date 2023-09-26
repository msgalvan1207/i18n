import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";

import localeEsMessages from "./locales/es.json";
import localeEnMessages from "./locales/en.json";

import JobsList from "./components/jobslist";

const det = () => {
    if (navigator.language ==='en'){
        return localeEnMessages
    } else if (navigator.language==='es') {
        return localeEsMessages
    }
}

ReactDOM.render(

    <IntlProvider locale={navigator.language} messages={det()}>
        <JobsList />
    </IntlProvider>, document.getElementById("root"));
