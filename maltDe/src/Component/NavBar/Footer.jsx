import React from 'react'
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
   <>
   <footer>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <p>{t("copyright")} © 2023 Devvy Co         
          <br/>{t("designedandDevlopedby")}<a rel="nofollow" href="https://koliinfotech.com/" title="free CSS templates">KOLI Infotech Pvt. Ltd.</a></p>
        </div>
      </div>
    </div>
  </footer>
   </>  
  )
}

export default Footer