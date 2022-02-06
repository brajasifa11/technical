import React from "react";
import classes from "./index.module.scss";

import Logo from "../../static/images/Logo.png";
import Contact from "../../static/images/Contact.png";
import facebook from "../../static/icons/facebook.png";
import twitter from "../../static/icons/twitter.png";
import instagram from "../../static/icons/instagram.png";
import tiktok from "../../static/icons/tiktok.png";
import youtube from "../../static/icons/youtube.png";
import Copyright from "../../static/images/Copyright.png";

export const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wraper}>
        <div className={classes.about}>
          <img className={classes.logo} src={Logo} />
          <p>
            ProSehat adalah Aplikasi marketplace kesehatan andalan keluarga
            Indonesia untuk mendapatkan layanan kesehatan terpercaya di rumah
            dengan mudah, <br />
            mulai dari vaksinasi sampai fisioterapi dilayani oleh tenaga
            kesehatan profesional.
          </p>
        </div>
        <div className={classes.contact}>
          <img src={Contact} />
        </div>
        <div className={classes.more}>
          <div>
            <p>Install Aplikasi</p>
          </div>
          <div>
            <p>Artikel Kesehatan</p>
          </div>
          <div>
            <p>Tentang Kami</p>
          </div>
          <div>
            <p>Syarat dan Ketentuan ProSehat</p>
          </div>
          <div>
            <p>Iklan</p>
          </div>
        </div>
        <div className={classes.socialmedia}>
          <p>Social Links</p>
          <div className={classes.group}>
            <img src={facebook} />
            <img src={twitter} />
            <img src={instagram} />
            <img src={tiktok} />
            <img src={youtube} />
          </div>
        </div>
      </div>
      <img className={classes.copyright} src={Copyright} />
    </div>
  );
};
