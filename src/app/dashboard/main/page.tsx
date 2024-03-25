import { SimpleWidget, WidgetsGrid } from "@/components";
import React from "react";

export default function MainPage () {
	return (
        <div className="text-black p-2">
            <h1 className="mt-2 text-3x">Dashboard</h1>
            <span className="text-xl">Información general</span>
            <WidgetsGrid />
        </div>
    );
};
