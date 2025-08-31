import { router } from "@inertiajs/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { route } from "ziggy-js";

const useSearchParams = ({ search }: { search: string }) => {
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
    }, [inputValue]);

    return {
        setInputValue,
        inputValue,
        setPageNumber,
        sortColumn,
        setSortColumn,
        setSortDirection,
    };
};

export default useSearchParams;
