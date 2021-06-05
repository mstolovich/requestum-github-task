import React, { FC, ReactElement } from "react";
import "./Header.scss"

export const Header: FC = (): ReactElement => {
  return (
    <>
      <header>
        <div id="requestumLogo">
          <svg viewBox="0 0 36 25">
            <path fill="#f11869" fillRule="evenodd" d="M16.18 7.895H9.443L0 0h26.034c5.342.308 8.302 3.195 8.88 8.661.035.765.035 2.155 0 4.17-.178 3.113-1.704 5.493-4.58 7.139.153.149 2.001 1.726 5.543 4.733H29.14l-4.184-3.617H8.122v3.617H3.734V16.81h16.098l-3.757-3.22h6.704l3.784 3.22c2.658-.733 3.988-2.274 3.988-4.623.009-.884.009-1.955 0-3.213-.374-2.813-1.83-4.37-4.371-4.67-.202.006-4.981.006-14.338 0l4.339 3.591z"></path>
          </svg>
          <div> <p id="requestumText">requestum</p><p id="logoSubtitle">web development company</p></div>
        </div>
        <div id="appName">GitHub Search App</div>
      </header>
      <hr id="separator" />
    </>
  );
};

