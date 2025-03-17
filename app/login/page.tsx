"use client";
import React, { } from 'react';
import Styles from './styles.module.css';
import FormLogin from '../components/forms/formLogin/page';

export default function Login (){

    return(
        <div className={Styles.conteiner}>
            <p className={Styles.header}>pagina de login</p>

            <form action="./cliente" >

            <FormLogin/>

            </form>
        </div>
    )
}