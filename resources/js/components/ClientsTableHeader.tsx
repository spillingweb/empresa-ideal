import { ChevronsUpDown } from "lucide-react";
import styles from "./ClientsTableHeader.module.css";

const ClientsTableHeader = ({
    text,
    onClick,
}: {
    text: string;
    onClick: () => void;
}) => (
    <th>
        <button className={styles.tableHeader} tabIndex={0} onClick={onClick}>
            <span>{text}</span>
            <ChevronsUpDown size={16} className={styles.sortIcon} />
        </button>
    </th>
);

export default ClientsTableHeader;
