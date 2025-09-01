import { Head, router } from "@inertiajs/react";
import AppLayout from "../../layout/AppLayout.js";
import type { Client } from "../../types/index.js";
import Heading from "../../components/ui/Heading.js";
import Pagination from "../../components/ui/Pagination.js";
import Input from "../../components/ui/Input.js";
import Button from "../../components/ui/Button.js";
import { route } from "ziggy-js";
import ClientsTable from "../../components/ClientsTable.js";
import styles from "./Index.module.css";
import useSearchParams from "../../hooks/useSearchParams.js";
import { X } from "lucide-react";
import useWindowWidth from "../../hooks/useWindowWidth.js";

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
    } = useSearchParams(search);

    const { windowWidth } = useWindowWidth();

    return (
        <AppLayout>
            <Head title="Clientes" />
            <div className={styles.contentContainer}>
                <Heading>Nuestros clientes</Heading>

                <div className={styles.searchContainer}>
                    <Input
                        value={inputValue}
                        id="search"
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Buscar..."
                    />
                    <X
                        size={16}
                        className={styles.clearIcon}
                        onClick={() => setInputValue("")}
                    />
                    <Button
                        onClick={() => router.visit(route("client.create"))}
                        variant="success"
                    >
                        + {windowWidth > 768 && " Añadir cliente"}
                    </Button>
                </div>
                <ClientsTable
                    clients={clients.data}
                    setSortDirection={setSortDirection}
                    setSortColumn={setSortColumn}
                    sortColumn={sortColumn}
                />
                <Pagination meta={clients.meta} setPageNumber={setPageNumber} />
            </div>
        </AppLayout>
    );
};

export default Index;
