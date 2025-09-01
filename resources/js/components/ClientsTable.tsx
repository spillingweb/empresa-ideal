import { Link, router } from "@inertiajs/react";
import type { Client } from "../types/index.js";
import Table from "./ui/Table.js";
import { route } from "ziggy-js";
import { Trash, PencilLine } from "lucide-react";
import styles from "./ClientsTable.module.css";
import ClientsTableHeader from "./ClientsTableHeader.js";
import useWindowWidth from "../hooks/useWindowWidth.js";

type ClientsTableProps = {
    clients: Client[];
    setSortDirection: React.Dispatch<React.SetStateAction<"asc" | "desc">>;
    setSortColumn: React.Dispatch<React.SetStateAction<string>>;
    sortColumn: string;
};

const ClientsTable = ({
    clients,
    setSortDirection,
    setSortColumn,
    sortColumn,
}: ClientsTableProps) => {
    const { windowWidth } = useWindowWidth();

    const handleHeaderClick = (column: string) => {
        if (sortColumn === column) {
            setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
        } else {
            setSortColumn(column);
        }
    };

    const handleDeleteClient = (clientId: number) => {
        if (confirm("¿Estás seguro de que deseas eliminar este cliente?")) {
            router.delete(route("client.destroy", clientId), {
                preserveState: true,
            });
        }
    };

    return (
        <div className={styles.tableContainer}>
            <Table>
                <thead>
                    <tr>
                        {windowWidth >= 768 && (
                            <ClientsTableHeader
                                text="ID"
                                onClick={() => handleHeaderClick("id")}
                            />
                        )}
                        <ClientsTableHeader
                            text="Nombre"
                            onClick={() => handleHeaderClick("name")}
                        />
                        <ClientsTableHeader
                            text="Correo electrónico"
                            onClick={() => handleHeaderClick("email")}
                        />
                        <ClientsTableHeader
                            text="Teléfono"
                            onClick={() => handleHeaderClick("telephone")}
                        />
                        {windowWidth >= 768 && (
                            <ClientsTableHeader
                                text="Creado"
                                onClick={() => handleHeaderClick("created_at")}
                            />
                        )}
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {clients.length > 0 ? (
                        clients.map((client) => (
                            <tr key={client.id}>
                                {windowWidth >= 768 && <td>{client.id}</td>}
                                <td>{client.name}</td>
                                <td>{client.email}</td>
                                <td>{client.telephone}</td>
                                {windowWidth >= 768 && (
                                    <td>{client.created_at}</td>
                                )}
                                <td>
                                    <div className={styles.icons}>
                                        <Link
                                            href={route(
                                                "client.edit",
                                                client.id
                                            )}
                                            title="Editar cliente"
                                        >
                                            <PencilLine
                                                size={16}
                                                className={styles.editIcon}
                                            />
                                        </Link>
                                        <button
                                            title="Eliminar cliente"
                                            className={styles.deleteButton}
                                            onClick={() =>
                                                handleDeleteClient(client.id)
                                            }
                                        >
                                            <Trash
                                                size={16}
                                                className={styles.deleteIcon}
                                            />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7} className={styles.noData}>
                                No hay clientes para mostrar.
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    );
};

export default ClientsTable;
