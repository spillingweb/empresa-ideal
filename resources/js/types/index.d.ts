export type Client = {
    id: number;
    name: string;
    email: string;
    telephone: string;
    created_at: string;
    updated_at: string;
};

export type Flash = {
    success: string | undefined;
    error: string | undefined;
};
