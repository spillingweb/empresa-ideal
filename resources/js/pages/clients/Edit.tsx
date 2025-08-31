import { Head, useForm } from "@inertiajs/react";
import Form from "../../components/ui/Form.js";
import Heading from "../../components/ui/Heading.js";
import AppLayout from "../../layout/AppLayout.js";
import type { Client } from "../../types/index.js";
import styles from "./Edit.module.css";
import { route } from "ziggy-js";
import Input from "../../components/ui/Input.js";
import Button from "../../components/ui/Button.js";
import Card from "../../components/ui/Card.js";

const Edit = ({ client }: { client: Client }) => {
    const { data, setData, put } = useForm({
        name: client.name,
        email: client.email,
        telephone: client.telephone,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(route("client.update", client.id));
    };

    return (
        <AppLayout>
            <Head title="Editar cliente" />
            <Card className={styles.container}>
                <Heading bottomMargin="medium">Editar cliente</Heading>
                <Form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Nombre</label>
                        <Input
                            type="text"
                            id="name"
                            name="name"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="telephone">Teléfono</label>
                        <Input
                            type="text"
                            id="telephone"
                            name="telephone"
                            value={data.telephone}
                            onChange={(e) =>
                                setData("telephone", e.target.value)
                            }
                            required
                        />
                    </div>
                    <div className={styles.buttons}>
                        <Button type="submit">Actualizar</Button>
                        <Button
                            type="button"
                            variant="secondary"
                            onClick={() => window.history.back()}
                        >
                            Cancelar
                        </Button>
                    </div>
                </Form>
            </Card>
        </AppLayout>
    );
};

export default Edit;
