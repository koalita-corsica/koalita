/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-key */
import React from "react";
import Layout from "../containers/layout";

import * as styles from "./contact.module.css";

const ContactPage = () => {
  return (
    <Layout>
      <div className={styles.wrapper}>
      <div className={styles.title}>
          <h2>L'équipe</h2>
        </div>
        <div className={styles.team}>
          <div className={styles.member}>
            <img src="https://via.placeholder.com/700x2340?text=Jiann" />
            <div className={styles.name}>
              <p>Jiann Venturini</p>
            </div>
            <div className={styles.desc}>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut{" "}
              </p>
            </div>
          </div>
          <div className={styles.member}>
            <img src="https://via.placeholder.com/700x2340?text=Laetitia" />
            <div className={styles.name}>
              <p>Laetitia Pierre</p>
            </div>
            <div className={styles.desc}>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut{" "}
              </p>
            </div>
          </div>
          <div className={styles.member}>
            <img src="https://via.placeholder.com/700x2340?text=Alexandre" />
            <div className={styles.name}>
              <p>Alexandre Bastide</p>
            </div>
            <div className={styles.desc}>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut{" "}
              </p>
            </div>
          </div>
        </div>
        <div className={styles.form}>
          <form>
            <h1> Nous contacter</h1>
            <div className={styles.contenu}>
              <label for="name">Votre nom :</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Votre nom.."
              />

              <label for="email">Votre email :</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Votre email.."
              />

              <label for="subject">Votre message :</label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Dites nous tout.."
                style={{ height: "200px" }}
              ></textarea>

              <button type="submit" form="form1" value="envoyer">
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
