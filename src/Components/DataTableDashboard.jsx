import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ProductService } from "./service/ProductService";
import { Card } from "primereact/card";

export default function DataTableDashboard() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []);

    return (
        <Card className="shadow-lg rounded-2xl p-6 dark:bg-gray-800">
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white text-center">
                Liste des Produits
            </h3>

            <DataTable
                value={products}
                sortMode="multiple"
                tableStyle={{ minWidth: "100%" }}
                className="p-datatable-sm"
                responsiveLayout="scroll"
                paginator
                rows={5}
                rowsPerPageOptions={[5, 10, 20]}
            >
                <Column field="code" header="Code" sortable style={{ width: "20%" }} />
                <Column field="name" header="Nom du produit" sortable style={{ width: "30%" }} />
                <Column field="category" header="Catégorie" sortable style={{ width: "30%" }} />
                <Column field="quantity" header="Quantité" sortable style={{ width: "20%" }} />
            </DataTable>
        </Card>
    );
}
