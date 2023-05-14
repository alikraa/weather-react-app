import styles from './modal-window.module.css';

function ModalWindow() {
  return (
    <div className={styles.wrapper} style={{ visibility: 'hidden' }}>
      <div className={styles.content}>
        <h2 className={styles.text}>text</h2>
        <button className={styles.button} type="button">
          Понятно
        </button>
      </div>
    </div>
  );
}

export { ModalWindow };
