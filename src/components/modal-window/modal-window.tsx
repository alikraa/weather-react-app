import { ModalWindowProps } from '../../ts/interfaces.ts';
import styles from './modal-window.module.css';

function ModalWindow({ isOpen, setIsOpen, text }: ModalWindowProps) {
  return (
    <div className={styles.wrapper} hidden={isOpen}>
      <div className={styles.content}>
        <h2 className={styles.text}>{text}</h2>
        <button
          className={styles.button}
          type="button"
          onClick={() => setIsOpen(true)}
        >
          Понятно
        </button>
      </div>
    </div>
  );
}

export { ModalWindow };
