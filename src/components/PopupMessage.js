import React from "react";
import Modal from "react-modal";
import CustomButton from "./CustomButton";
import '../index.css'

Modal.setAppElement("#root");

function PopupMessage({ isOpen, onClose }) {

    return (
        <Modal isOpen={isOpen} onRequestClose={onClose} style={{
            overlay: {
                position: 'fixed',
                backgroundColor: 'rgba(0, 0, 0, 0.75)'
            }
        }}
            className='flex flex-col justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white border border-solid border-white backdrop-blur-[4px] rounded-md w-full sm:w-1/2 md:w-1/3' contentLabel="Okno popup p-4">
            <h2 className="text-xl pt-5">Pomyślnie zarejestrowano!</h2>
            <CustomButton onClick={onClose}>Zamknij</CustomButton>
            <div className="pb-5"></div>
        </Modal >
    );
}

export default PopupMessage;
