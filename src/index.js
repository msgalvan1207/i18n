import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";

import localeEsMessages from "./locales/es.json";
import localeEnMessages from "./locales/en.json";

import JobsList from "./components/jobslist";

const det = () => {
    if (navigator.language.includes('en')){
        return localeEnMessages
    } else if (navigator.language.includes('es')) {
        return localeEsMessages
    }
}

ReactDOM.render(

    <IntlProvider locale={navigator.language} messages={det()}>
        <JobsList />
        {console.log(navigator.language)}
    </IntlProvider>, document.getElementById("root"));
