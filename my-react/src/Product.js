import React from "react";

function Product() {
    const products = [
        { id: "P001", nama: "Asus", harga: 2000000, img: "/asus.jpg" }, // Use /asus.jpg
        { id: "P002", nama: "Lenovo", harga: 5000000, img: "/lenovo.jpg" }, // Use /lenovo.jpg
        { id: "P003", nama: "Acer", harga: 10000000, img: "/acer.jpg" }, // Use /acer.jpg
        { id: "P004", nama: "LG", harga: 4000000, img: "/lg.jpg" }, // Use /lg.jpg
    ];

    return (
        <div className="product-container">
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nama</th>
                        <th>Harga</th>
                        <th>Gambar</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.nama}</td>
                            <td>{product.harga}</td>
                            <td>
                                <img src={product.img} alt={product.nama} style={{ width: '50px', height: '50px' }} /> {/* Add alt attribute and style */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            
        </div>
    );
}

export default Product;
