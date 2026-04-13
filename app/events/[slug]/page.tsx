"use client";
import { useState, use } from "react";
import display from "../eventsComponent";

export default function slugPage ({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);

    const[page, setPage] = useState<any>(display(slug));

    return (
        <div>
            {page}
        </div>
    )
}