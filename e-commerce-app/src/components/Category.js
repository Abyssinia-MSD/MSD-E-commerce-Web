
import { Link } from "react-router-dom";
import styled from "styled-components"
const CatItem = styled.div`
    background-image: url(${ (props)=> props.bg});
    background-color: #fff;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 1rem 2rem;
    height: 50vh;
    
`;
const Category = ({category}) => {
    return (
        <CatItem bg={category.image} className="col-4">
            <Link to={`/products/${category.title}`}>
            <div className="d-flex bg align-items-center justify-content-center h-100 w-100 ">
                <h6>
                {category.title}
                </h6>
            </div>
            </Link>
            

        </CatItem>
    )
}

export default Category
