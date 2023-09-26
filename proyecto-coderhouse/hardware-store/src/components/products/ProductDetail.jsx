import { Card, CardContent, Grid, Typography } from "@mui/material";
import { useState } from "react";
import ProductInfo from "./ProductInfo";

const ProductDetail = ({ product, children }) => {
    const { id, name, description, price, image, stock } = product
    const [isSelected, setIsSelected] = useState(false);

    const handleClick = () => {
        setIsSelected((prev) => !prev)
    }

    return (<>
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className="card-products-container" onClick={handleClick}>
                <img src={image} />
                <CardContent className="card-products-content">
                    <Typography>{name}</Typography>
                    <Typography>Descripción del producto: {description}</Typography>
                    <Typography>Strock disponible: {stock}</Typography>
                    <Typography>${price.toFixed(2)}</Typography>
                </CardContent>
            </Card>
        </Grid>
        {
            isSelected &&
            <ProductInfo product={product} open={isSelected} setOpen={setIsSelected} />
        }
    </>
    );
}

export default ProductDetail;