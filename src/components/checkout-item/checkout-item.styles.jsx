import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`

width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;

    @media screen and (max-width: 800px){
      font-size: 15px;
    
}
  
`
export const ImageContainer = styled.div`
width: 23%;
      padding-right: 15px;
  
      img {
        width: 100%;
        height: 100%;
      }
`
export const Name  = styled.span`
width: 23%;
      padding-right: 15px;
  
      img {
        width: 100%;
        height: 100%;
      }

@media screen and (max-width: 800px){
      width: 5%;
      padding: 0;
}
`
export const Quantity = styled.span`
 width: 23%;
 display: flex;

 @media screen and (max-width: 800px){
      width: 5%;
      padding: 30px;
}
`
export const Arrow = styled.div`
cursor: pointer;
`

export const Price = styled.span`
 width: 23%;
 @media screen and (max-width: 800px){
      
      padding: 50px;
}

`
export const Value = styled.span`
margin: 0 10px;

`
export const RemoveButton = styled.span`
padding-left: 12px;
      cursor: pointer;

      @media screen and (max-width: 800px){
      width: 5%;
     
}

`

// .checkout-item-container {
//     width: 100%;
//     display: flex;
//     min-height: 100px;
//     border-bottom: 1px solid darkgrey;
//     padding: 15px 0;
//     font-size: 20px;
//     align-items: center;
  
//     .image-container {
//       width: 23%;
//       padding-right: 15px;
  
//       img {
//         width: 100%;
//         height: 100%;
//       }
//     }
//     .name,
//     .quantity,
//     .price {
//       width: 23%;
//     }
  
//     .quantity {
//       display: flex;
  
//       .arrow {
//         cursor: pointer;
//       }
  
//       .value {
//         margin: 0 10px;
//       }
//     }
  
//     .remove-button {
//       padding-left: 12px;
//       cursor: pointer;
//     }
//   }
  