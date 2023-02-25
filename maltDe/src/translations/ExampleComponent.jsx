import React from "react";
import { useTranslation } from "react-i18next";
import "../i18n";
 
export const ExampleComponent = () => {
const { t } = useTranslation();
 
 return (
   <div>
      <p> {t("welcome" )}</p>
      <p> {t("welcome asdsdsd" )}</p>
      <p> {t("welcomesdsds" )}</p>
      <p> {t("welcomedsdsd" )}</p>

   </div>
 );
};