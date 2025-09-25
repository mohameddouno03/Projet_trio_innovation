export const ProductService = {
    getProductsMini: () => {
        return Promise.resolve([
            { code: "A100", name: "Produit A", category: "Catégorie 1", quantity: 120 },
            { code: "B200", name: "Produit B", category: "Catégorie 2", quantity: 80 },
            { code: "C300", name: "Produit C", category: "Catégorie 1", quantity: 150 },
            { code: "D400", name: "Produit D", category: "Catégorie 3", quantity: 60 },
            { code: "E500", name: "Produit E", category: "Catégorie 2", quantity: 200 },
            { code: "F600", name: "Produit F", category: "Catégorie 3", quantity: 95 },
            { code: "G700", name: "Produit G", category: "Catégorie 1", quantity: 130 },
            { code: "H800", name: "Produit H", category: "Catégorie 2", quantity: 75 },
            { code: "I900", name: "Produit I", category: "Catégorie 3", quantity: 180 },
            { code: "J1000", name: "Produit J", category: "Catégorie 1", quantity: 140 }
        ]);
    }
};
