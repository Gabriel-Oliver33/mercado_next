import React, { } from 'react';
import Styles from './styles.module.css';

export default function FormCliente (){

    return(
        <div className={Styles.form}>
                <div className={Styles.card}>
                    <p className={Styles.text}>Nome do cliente</p>
                    <input className={Styles.input} type="text" name="nome" id="nome" placeholder="digite seu nome" />
                </div>

                <div className={Styles.card}>
                    <p className={Styles.text}>Endereço do cliente</p>
                    <input className={Styles.input} type="text" name="endereco" id="endereco" placeholder="digite seu endereço" />
                </div>

                <div className={Styles.card}>
                    <p className={Styles.text}>Cidade do cliente</p>
                    <input className={Styles.input} type="text" name="cidade" id="cidade" placeholder="digite sua cidade" />
                </div>

                <button className={Styles.button} type="submit" value="cadastrar">Salvar</button>
        </div>
    )
}