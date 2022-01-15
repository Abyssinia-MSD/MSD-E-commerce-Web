
import { Link } from "react-router-dom";
import styled from "styled-components";
const colors=["#626f1a","#E3C2A0", "#AF8C3E"]
const CatItem = styled.div`
    background-color: ${ (props)=> colors[props.bg%3]};
     
    
    padding: 1rem ;
    border-radius: 50%;
    transform: scale(0.5);
    height: 50vh;
    width: 50vh;
    &:hover{
        transform: scale(1);

    }
    
`;

const Category = ({category}) => {
    return (
        <CatItem bg={category.id} >
            <Link to={`/products/${category.title}`}>
            <div className="d-flex bg align-items-center justify-content-center h-100 w-100 ">
                <h1 className="h1">
                {category.title}
                </h1>
            </div>
            </Link>
            

        </CatItem>
    )
}

export default Category
