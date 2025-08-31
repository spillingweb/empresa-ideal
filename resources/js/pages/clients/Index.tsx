import { Head, router } from "@inertiajs/react";
import AppLayout from "../../layout/AppLayout.js";
import type { Client } from "../../types/index.js";
import Heading from "../../components/ui/Heading.js";
import { useEffect, useMemo, useRef, useState } from "react";
import Pagination from "../../components/ui/Pagination.js";
import Input from "../../components/ui/Input.js";
import Button from "../../components/ui/Button.js";
import { route } from "ziggy-js";
import ClientsTable from "../../components/ClientsTable.js";
import styles from "./Index.module.css";
import useSearchParams from "../../hooks/useSearchParams.js";
import LogoBrand from "../../components/LogoBrand.js";

type IndexProps = {
    clients: {
        data: Client[];
        meta: {
            from: number;
            to: number;
            total: number;
            links: {
                url: string | null;
                label: string;
                active: boolean;
                page: number;
            }[];
        };
    };
    search: string;
};

const Index = ({ clients, search }: IndexProps) => {
    const {
        setInputValue,
        inputValue,
        setPageNumber,
        sortColumn,
        setSortColumn,
        setSortDirection,
    } = useSearchParams({ search });

    return (
        <AppLayout>
            <Head title="Clientes" />
            <div className={styles.contentContainer}>
                <div className={styles.flexContainer}>
                    <Heading>Nuestros clientes</Heading>
                    <Button
                        onClick={() => router.visit(route("client.create"))}
                    >
                        + Añadir cliente
                    </Button>
                </div>
                <div className={styles.searchContainer}>
                    <Input
                        value={inputValue}
                        id="search"
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Buscar..."
                    />
                    <Pagination
                        meta={clients.meta}
                        setPageNumber={setPageNumber}
                    />
                </div>
                <ClientsTable
                    clients={clients.data}
                    setSortDirection={setSortDirection}
                    setSortColumn={setSortColumn}
                    sortColumn={sortColumn}
                />
            </div>
        </AppLayout>
    );
};

export default Index;
