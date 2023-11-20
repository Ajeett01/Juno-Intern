import styles from './Modal.module.css';

const ModalComponent = ({ handleModalClose }) => {
  return (
    <div className={styles.div}>
      <div className={styles.item} />
      <div className={styles.frameGroup}>
        <div className={styles.closeAccountParent}>
          <div className={styles.user}>Close account</div>
          <button className={styles.x}>
            <img
              className={styles.vectorStrokeIcon}
              alt=""
              src="/vector-stroke.svg"
            />
            <img
              className={styles.vectorStrokeIcon}
              alt=""
              src="/vector-stroke1.svg"
              onClick={handleModalClose}
            />
          </button>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.emailParent}>
            <div className={styles.email}>Email</div>
            <input className={styles.frameChild} type="text" />
          </div>
          <div className={styles.wantToFileUarParent}>
            <div className={styles.email}>Want to file UAR</div>
            <div className={styles.frameParent1}>
              <div className={styles.frameParent2}>
                <div className={styles.frameItem} />
                <div className={styles.yes}>Yes</div>
              </div>
              <div className={styles.frameParent2}>
                <div className={styles.frameItem} />
                <div className={styles.yes}>No</div>
              </div>
            </div>
          </div>
          <div className={styles.emailParent}>
            <div className={styles.email}>Reason</div>
            <input className={styles.frameChild} type="text" />
          </div>
          <div className={styles.emailParent}>
            <div className={styles.email}>Note</div>
            <textarea className={styles.frameTextarea} />
          </div>
        </div>
        <div className={styles.frameParent4}>
          <div className={styles.frameParent2}>
            <div className={styles.frameItem} />
            <div className={styles.yes}>Charge closure fee</div>
          </div>
          <button className={styles.button1}>
            <img className={styles.plusIcon} alt="" src="/icons.svg" />
            <div className={styles.next}>Close Account</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
