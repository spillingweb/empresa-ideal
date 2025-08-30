import React from "react";

interface HomeProps {
    name: string;
}

const Home: React.FC<HomeProps> = ({ name }) => {
    return (
        <div>
            <h1>Welcome, {name}!</h1>
            <p>This is your first Inertia page with React and TypeScript.</p>
        </div>
    );
};

export default Home;
