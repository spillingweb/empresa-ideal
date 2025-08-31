import { Head, router } from "@inertiajs/react";
import Form from "../../components/ui/Form.js";
import Heading from "../../components/ui/Heading.js";
import AppLayout from "../../layout/AppLayout.js";
import type { Client } from "../../types/index.js";
import styles from "./FormCard.module.css";
import { route } from "ziggy-js";
import Input from "../../components/ui/Input.js";
import Button from "../../components/ui/Button.js";
import Card from "../../components/ui/Card.js";
import { useForm } from "laravel-precognition-react-inertia";
import InputError from "../../components/ui/InputError.js";

const Edit = ({ client }: { client: Client }) => {
    const {
        data,
        setData,
        validate,
        invalid,
        errors,
        forgetError,
        submit,
        reset,
        processing,
    } = useForm<{
        name: string;
        email: string;
        telephone: string;
    }>("put", route("client.update", client.id), {
        name: client.name,
        email: client.email,
        telephone: client.telephone,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        submit({
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    };

    return (
        <AppLayout>
            <Head title="Editar cliente" />
            <Card className={styles.container}>
                <Heading>Editar cliente</Heading>
                <Form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Nombre</label>
                        <Input
                            type="text"
                            id="name"
                            name="name"
                            value={data.name}
                            onChange={(e) => {
                                setData("name", e.target.value);
                                forgetError("name");
                            }}
                            onBlur={() => validate("name")}
                        />
                        {invalid("name") && (
                            <InputError message={errors.name} />
                        )}
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            value={data.email}
                            onChange={(e) => {
                                setData("email", e.target.value);
                                forgetError("email");
                            }}
                            onBlur={() => validate("email")}
                        />
                        {invalid("email") && (
                            <InputError message={errors.email} />
                        )}
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="telephone">Teléfono</label>
                        <Input
                            type="text"
                            id="telephone"
                            name="telephone"
                            value={data.telephone}
                            onChange={(e) => {
                                setData("telephone", e.target.value);
                                forgetError("telephone");
                            }}
                            onBlur={() => validate("telephone")}
                        />
                        {invalid("telephone") && (
                            <InputError message={errors.telephone} />
                        )}
                    </div>
                    <div className={styles.buttons}>
                        <Button type="submit" disabled={processing}>
                            Actualizar
                        </Button>
                        <Button
                            type="button"
                            variant="secondary"
                            onClick={() => router.visit(route("client.list"))}
                            disabled={processing}
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
