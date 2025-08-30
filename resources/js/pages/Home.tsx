import React from "react";
import AppLayout from "../layout/AppLayout.js";
import { Head } from "@inertiajs/react";

interface HomeProps {
    name: string;
}

const Home: React.FC<HomeProps> = ({ name }) => {
    return (
        <AppLayout>
            <Head title={`Inicio - ${name}`} />
            <h1>Bienvenido, {name}!</h1>
            <p>Esta es tu primera página de Inertia con React y TypeScript.</p>
        </AppLayout>
    );
};

export default Home;
