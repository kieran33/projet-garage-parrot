import React from 'react';
import ReactModal from 'react-modal';
import { useState, useEffect } from 'react';

const BouttonSupprimerServices = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectService, setSelectService] = useState('');
    const [listeName, setListeName] = useState([]);

    useEffect(() => {
        ReactModal.setAppElement('body');
    }, []);

    useEffect(() => {
        //Récupérer les services actuels du localStorage
        const getListeServicesUpdate = JSON.parse(localStorage.getItem('liste de services')) || [];
        setListeName(getListeServicesUpdate);
    }, [selectService]);


    const supprimerService = (e) => {
        e.preventDefault();

        const updateServiceName = listeName.filter(service => service.name !== selectService);

        localStorage.setItem('liste de services', JSON.stringify(updateServiceName));

        setListeName(updateServiceName);

        alert(`Le service ${selectService} à bien été supprimer`);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <button className="boutonSupprimerService" onClick={openModal}>Supprimer un service</button>
            <ReactModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
            >
                <form className="supprimerService" onSubmit={supprimerService}>
                    <legend>Quel service souhaitez-vous supprimer ?</legend>
                    <select
                        name="servicesSuppression"
                        id="servicesSuppression"
                        value={selectService}
                        onChange={(e) => setSelectService(e.target.value)}
                        required
                    >
                        <option value="">Veuillez choisir le service à supprimer</option>
                        {listeName.map((service, index) => (
                            <option key={index} value={service.name}>
                                {service.name}
                            </option>
                        ))}
                    </select>
                    <div>
                        <button className="bouttonSupprimer" type="submit">Supprimer</button>
                        <button className="bouttonAnnulerSupr" onClick={closeModal}>Fermer</button>
                    </div>
                </form>

            </ReactModal>
        </div>
    );
};

export default BouttonSupprimerServices;