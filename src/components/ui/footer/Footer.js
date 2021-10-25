import React from 'react'
import styles from './footer.module.css';
import {Link} from 'react-router-dom';
// const classNames = require('classnames');
export default function Footer() {
    return (
        <footer className={styles.footer}>
           	&#169; Copyright 2021 Fresh Recipes
        </footer>
    )
}