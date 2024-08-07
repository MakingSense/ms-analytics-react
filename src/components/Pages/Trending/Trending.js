import axios from "axios";
import {useState, useEffect} from "react";
import CustomPagination from "../../Pagination/CustomPagination";
import SingleContent from "../../SingleContent/SingleContent";
import './Trending.css';
const Trending = () =>{
const [page, setPage] = useState(1);
const [content, setContent] =  useState([]);

const fetchTrending = async() =>{
const { data } = await axios.get(
`https://api.themoviedb.org/3/trending/all/day?api_key=fe7f525d019d7186e76683b4233c4a0c&page=${page}`
);
//console.log(data.results);
setContent(data.results);
};


useEffect(() => {
  fetchTrending();
  // eslint-disable-next-line
}, [page]);

return (
<div>
<span className="pageTitle">Trending2</span>
<div className="trending">
{
content && content.map((c)=><SingleContent key={c.id} id={c.id} poster={c.poster_path} title={c.title || c.name} data={c.first_air_date || c.release_date}
media_type={c.media_type} vote_average={c.vote_average}
/>)
}
</div>
<CustomPagination setPage={setPage}/>
</div>
);
};
export default Trending;