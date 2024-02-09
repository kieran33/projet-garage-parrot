import React from 'react';
import Navigation from '../components/Navigation';
import BoutonAjoutServices from '../components/BoutonAjoutServices';
import BouttonSupprimerServices from '../components/BouttonSupprimerServices';
import BoutonFermeOuvert from '../components/BoutonFermeOuvert';

const DashboardAdmin = () => {
    return (
        <div>
            <Navigation />
            <h1>Espace administration admin</h1>
            <div className="boutonDashboard">
                <BoutonAjoutServices />
                <BouttonSupprimerServices />
                <BoutonFermeOuvert />
            </div>
        </div>
    );
};

export default DashboardAdmin;