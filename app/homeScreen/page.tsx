"use client";

import React from "react";
import Styles from "./styles.module.css";
import Header from "../components/header/page";

export default function HomeScreen() {
  return (
    <div className={Styles.conteiner}>
      <Header />

      <div className={Styles.welcomeContainer}>
        <h1 className={Styles.welcomeTitle}>Bem-vindo à Minha Aplicação!</h1>
        <p className={Styles.welcomeText}>
          Gerencie seus clientes, produtos e vendas de forma eficiente e fácil. 🚀
        </p>
      </div>
    </div>
  );
}
