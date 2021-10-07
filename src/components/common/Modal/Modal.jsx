import s from './Modal.module.css';

const Modal = ({ statusError, setStatusError }) => {
    return (
        <div className={statusError ? s.modalActive : s.modal} onClick={() => { setStatusError(false) }}>
            <div className={s.modalContent} onClick={e => e.stopPropagation()}>
                Error
            </div>
        </div>
    )
}

export default Modal;