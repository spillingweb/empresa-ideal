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
    const isInitialRender = useRef(true);

    const [inputValue, setInputValue] = useState<string>(search);
    const [searchTerm, setSearchTerm] = useState<string>(search);
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [sortColumn, setSortColumn] = useState<string>("id");
    const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

    // Construct the URL for fetching clients with current filters and sorting
    const searchUrl = useMemo(() => {
        const url = new URL(route("client.list"));

        if (searchTerm) {
            url.searchParams.append("busqueda", searchTerm);
        }
        url.searchParams.append("page", pageNumber.toString());
        url.searchParams.append("ord_columna", sortColumn);
        url.searchParams.append("ord_direccion", sortDirection);
        return url.toString();
    }, [searchTerm, pageNumber, sortColumn, sortDirection]);

    // Effect to handle initial render and URL updates
    useEffect(() => {
        if (isInitialRender.current) {
            isInitialRender.current = false;
            return;
        }
        router.visit(searchUrl, {
            preserveState: true,
            preserveScroll: true,
        });
    }, [searchUrl]);

    // Effect to handle input value changes and debounce search
    useEffect(() => {
        if (inputValue === searchTerm) return;

        // Debounce the search input to avoid too many requests
        const handler = setTimeout(() => {
            setSearchTerm(inputValue);
            setPageNumber(1); // Reset to first page on new search
        }, 500);
        return () => clearTimeout(handler);
    }, [inputValue, searchTerm]);

    return (
        <AppLayout>
            <Head title="Clientes" />
            <div className={styles.flexContainer}>
                <Heading>Nuestros clientes</Heading>
                <Button onClick={() => router.visit(route("client.create"))}>
                    Añadir cliente
                </Button>
            </div>
            <div className={styles.searchContainer}>
                <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Buscar..."
                />
            </div>
            <ClientsTable
                clients={clients.data}
                setSortDirection={setSortDirection}
                setSortColumn={setSortColumn}
                sortColumn={sortColumn}
            />
            <Pagination meta={clients.meta} setPageNumber={setPageNumber} />
        </AppLayout>
    );
};

export default Index;
