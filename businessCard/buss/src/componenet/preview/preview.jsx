import React from 'react';
import PreviewForm from '../previewForm/previewForm';
import styles from './preview.module.css';

const Preview = ({cards}) => (
  <>

    <section className={styles.preview}>
    <h1 className={styles.title}>preview</h1>
    <li className={styles.previewForm}>
     {Object.keys(cards).map((key)=> <PreviewForm card = {cards[key]}/>)}
    </li>
    </section>
  </>
  );

export default Preview;