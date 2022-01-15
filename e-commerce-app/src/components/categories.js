
import { categoryList } from '../data'
import Category from './Category'

const Categories = () => {
    return (
        <div className='p-3 px-5  row justify-content-between'>
            {categoryList.map((item)=>(
                    <Category category={item} key={item.id}/>
                ))
            }
        </div>
        
    )
}

export default Categories
