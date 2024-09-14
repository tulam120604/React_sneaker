import { Link } from "react-router-dom";

export default function Item() {
  return (
    <Link to={'/products/detail'} className="border overflow-hidden border-white rounded hover:border-gray-800 duration-200 flex flex-col justify-between *:border">
        <div className="h-[60%]"></div>
        <div className="h-[35%]"></div>
    </Link>
  )
}
