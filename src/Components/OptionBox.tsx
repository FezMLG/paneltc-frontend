import { Link } from "react-router-dom";

const OptionBox = ( props: any ) => {
    return(
        <div className="rounded-lg bg-gray-700 max-w-md p-5 h-80 flex flex-col content-between flex-grow">
          <div className="rounded-full bg-gray-500 p-5 w-min mb-5">
            {props.icon}
          </div>
          <h3 className="font-semibold text-4xl text-white h-full">{props.title}</h3>
          <Link to={props.path}>
            <button className="px-6 py-2 rounded-lg bg-green-800 transition-transform transform hover:scale-90 max-w-min">
              <span className="font-semibold text-2xl text-white">
                {props.btnTxt}
              </span>
            </button>
          </Link>
        </div>
    )
};

export default OptionBox;