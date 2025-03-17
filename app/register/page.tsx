'use client'
import React, { } from 'react';
import Styles from './styles.module.css';
import FormRegister from '../components/forms/formResgister/page';

export default function Register (){

    return(
        <div className={Styles.conteiner}>
            <p className={Styles.header}>pagina de registro</p>

            <form action="./login" >

            <FormRegister/>

            </form>
        </div>
    )
}