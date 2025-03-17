"use client";
import React, { } from 'react';
import Styles from './styles.module.css';
import { useRouter } from "next/navigation";


export default function FormLogin (){
    const router = useRouter();

    return(
        <div className={Styles.form}>
                <div className={Styles.card}>
                    <p className={Styles.text}>Email:</p>
                    <input className={Styles.input} type="text" name="email" id="email" placeholder="digite seu email" />
                </div>

                <div className={Styles.card}>
                    <p className={Styles.text}>Senha:</p>
                    <input className={Styles.input} type="text" name="senha" id="senha" placeholder="digite sua senha" />
                </div>

                <div className={Styles.row}>
                    <button className={Styles.button} type="submit" value="login">Login</button>
                    <button className={Styles.buttonRegister} type="button" onClick={() => router.push("./register")}>Cadastrar</button>
                </div>
        </div>
    )
}