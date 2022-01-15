
import { categoryList } from '../data'
import Category from './Category'

const Categories = () => {
    return (
        <div className='p-3 px-5 col-sm-10 mx-auto  row justify-content-center'>
            {categoryList.map((item)=>(
                    <Category category={item} key={item.id}/>
                ))
            }
        </div>
        
    )
}

export default Categories
