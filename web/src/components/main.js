import React from "react";

import * as styles from "./content.module.css";

const Main = ({ children }) => <div className={styles.content}>{children}</div>;

export default Main;
