import React, { } from 'react';
import Styles from './styles.module.css';

export default function FormRegister (){

    return(
        <div className={Styles.form}>
                <div className={Styles.card}>
                    <p className={Styles.text}>Nome:</p>
                    <input className={Styles.input} type="text" name="nome" id="nome" placeholder="digite seu nome" />
                </div>

                <div className={Styles.card}>
                    <p className={Styles.text}>Email:</p>
                    <input className={Styles.input} type="text" name="email" id="email" placeholder="digite seu email" />
                </div>

                <div className={Styles.card}>
                    <p className={Styles.text}>Endereco:</p>
                    <input className={Styles.input} type="text" name="endereco" id="endereco" placeholder="digite seu endereco" />
                </div>

                <div className={Styles.card}>
                    <p className={Styles.text}>Senha:</p>
                    <input className={Styles.input} type="text" name="senha" id="senha" placeholder="digite sua senha" />
                </div>

                <div className={Styles.card}>
                    <p className={Styles.text}>Confirme a senha:</p>
                    <input className={Styles.input} type="text" name="confirmSenha" id="confirmSenha" placeholder="digite sua senha" />
                </div>

                <button className={Styles.button} type="submit" value="cadastrar">Cadastrar</button>
        </div>
    )
}