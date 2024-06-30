import { FaSearch } from "react-icons/fa";
import "./Searchbar.scss"
const Searchbar = () => {
  return (
    <div className='searchbar'>
      <form >
                <input type="search" placeholder="البحث..." />
                </form>
                        <FaSearch />
    </div>
  )
}

export default Searchbar