import { css } from '@emotion/react';
import Image from 'next/image';
import { products } from '../../database/products';

const productStyles = css`
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 30px;

  & + & {
    margin-top: 30px;
  }
`;

export default function Product(props) {
  return (
    <>
      {}
      <div key={`product-${props.product.id}`} css={productStyles}>
        <h2>{props.product.name}</h2>
        <Image
          src={`/${props.product.id}-${props.product.name}.jpg`}
          alt=""
          width="200"
          height="200"
        />
        <div>Size: {props.product.size}</div>
        <div>Prize: {props.product.prize}</div>
      </div>
    </>
  );
}

export function getServerSideProps(context) {
  const productId = parseInt(context.query.productId);

  const foundProduct = products.find((product) => {
    return product.id === productId;
  });
  return {
    props: {
      productId: foundProduct,
    },
  };
}
