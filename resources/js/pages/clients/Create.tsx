import { Head, router } from "@inertiajs/react";
import Form from "../../components/ui/Form.js";
import Heading from "../../components/ui/Heading.js";
import AppLayout from "../../layout/AppLayout.js";
import styles from "./FormCard.module.css";
import Input from "../../components/ui/Input.js";
import Button from "../../components/ui/Button.js";
import InputError from "../../components/ui/InputError.js";
import { route } from "ziggy-js";
import Card from "../../components/ui/Card.js";
import { useForm } from "laravel-precognition-react-inertia";

const Create = () => {
    const { data, setData, validate, invalid, errors, submit, reset, processing } = useForm<{
        name: string;
        email: string;
        telephone: string;
    }>("post", route("client.store"), {
        name: "",
        email: "",
        telephone: "",
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        submit({
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    };

    return (
        <AppLayout>
            <Head title="Crear nuevo cliente" />
            <Card className={styles.container}>
                <Heading>Crear nuevo cliente</Heading>
                <Form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Nombre</label>
                        <Input
                            type="text"
                            id="name"
                            value={data.name}
                            name="name"
                            onChange={(e) => setData("name", e.target.value)}
                            onBlur={() => validate("name")}
                        />
                        {invalid("name") && (
                            <InputError message={errors.name} />
                        )}
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Correo electrónico</label>
                        <Input
                            type="email"
                            id="email"
                            value={data.email}
                            name="email"
                            onChange={(e) => setData("email", e.target.value)}
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
                            value={data.telephone}
                            name="telephone"
                            onChange={(e) =>
                                setData("telephone", e.target.value)
                            }
                            onBlur={() => validate("telephone")}
                        />
                        {invalid("telephone") && (
                            <InputError message={errors.telephone} />
                        )}
                    </div>
                    <div className={styles.buttons}>
                        <Button type="submit" disabled={processing}>
                            Crear cliente
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

export default Create;
