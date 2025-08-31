import { Link, router } from "@inertiajs/react";
import type { Client } from "../types/index.js";
import Table from "./ui/Table.js";
import { route } from "ziggy-js";
import { Trash } from "lucide-react";
import styles from "./ClientsTable.module.css";

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
                onSuccess: () => {
                    // Handle successful deletion (e.g., show a success message)
                },
                onError: () => {
                    // Handle error (e.g., show an error message)
                },
            });
        }
    };

    return (
        <Table>
            <thead>
                <tr>
                    <th onClick={() => handleHeaderClick("id")}>ID</th>
                    <th onClick={() => handleHeaderClick("name")}>Nombre</th>
                    <th onClick={() => handleHeaderClick("email")}>
                        Correo electrónico
                    </th>
                    <th onClick={() => handleHeaderClick("telephone")}>
                        Teléfono
                    </th>
                    <th onClick={() => handleHeaderClick("created_at")}>
                        Creado
                    </th>
                </tr>
            </thead>
            <tbody>
                {clients.length > 0 ? (
                    clients.map((client) => (
                        <tr key={client.id}>
                            <td>{client.id}</td>
                            <td>{client.name}</td>
                            <td>{client.email}</td>
                            <td>{client.telephone}</td>
                            <td>{client.created_at}</td>
                            <td>
                                <Link href={route("client.edit", client.id)}>
                                    Editar
                                </Link>
                            </td>
                            <td>
                                <Trash
                                    size={16}
                                    className={styles.deleteIcon}
                                    onClick={() =>
                                        handleDeleteClient(client.id)
                                    }
                                >
                                    Eliminar
                                </Trash>
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
    );
};

export default ClientsTable;
