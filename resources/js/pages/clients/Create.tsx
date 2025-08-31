import { Head, router, useForm } from "@inertiajs/react";
import Form from "../../components/ui/Form.js";
import Heading from "../../components/ui/Heading.js";
import AppLayout from "../../layout/AppLayout.js";
import styles from "./Create.module.css";
import Input from "../../components/ui/Input.js";
import Button from "../../components/ui/Button.js";
import InputError from "../../components/ui/InputError.js";
import { route } from "ziggy-js";
import Card from "../../components/ui/Card.js";

const Create = () => {
    const { data, setData, post, errors } = useForm<{
        name: string;
        email: string;
        telephone: string;
    }>({
        name: "",
        email: "",
        telephone: "",
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route("client.store"));
    };

    return (
        <AppLayout>
            <Head title="Crear nuevo cliente" />
            <Card>
                <Heading>Crear nuevo cliente</Heading>
                <Form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Nombre</label>
                        <Input
                            type="text"
                            id="name"
                            value={data.name}
                            name="name"
                            // required
                            onChange={(e) => setData("name", e.target.value)}
                        />
                        <InputError message={errors.name} />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Correo electrónico</label>
                        <Input
                            type="email"
                            id="email"
                            value={data.email}
                            name="email"
                            // required
                            onChange={(e) => setData("email", e.target.value)}
                        />
                        <InputError message={errors.email} />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="telephone">Teléfono</label>
                        <Input
                            type="text"
                            id="telephone"
                            value={data.telephone}
                            name="telephone"
                            // required
                            onChange={(e) =>
                                setData("telephone", e.target.value)
                            }
                        />
                        <InputError message={errors.telephone} />
                    </div>
                    <div className={styles.buttons}>
                        <Button type="submit">Crear cliente</Button>
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

export default Create;
