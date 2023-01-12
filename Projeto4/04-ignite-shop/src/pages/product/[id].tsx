import { useRouter } from 'next/router'
import { ImageContainer, ProductContainer, ProductDetails } from '../../styles/pages/product'

export default function Product() {
    return (
     <ProductContainer>
        <ImageContainer>

        </ImageContainer>

        <ProductDetails>
            <h1>Camiseta x</h1>
            <span>R$ 69,90</span>

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui tempora esse consequuntur, ullam animi voluptates. Nulla quam beatae facere labore accusamus dolores repellat, assumenda quasi dolor, id quaerat quae ducimus.</p>
            <button>
                Comprar agora
            </button>
        </ProductDetails>
     </ProductContainer>   
    )
}