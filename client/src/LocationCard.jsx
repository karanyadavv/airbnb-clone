


export default function LocationCard(props){
  return(
    <div className="inline-flex flex-wrap w-1/4">

      <div className="max-w-xs rounded-2xl  overflow-hidden shadow-lg mx-2 my-2 mb-4 cursor-pointer">
      
      <img className="w-full" src={props.image} alt="location" />

      <div className="px-6 py-4">

        <div className="font-bold text-sm mb-2">{props.title}</div>

        <p className="text-gray-700 text-sm">
        {props.description}
        </p>
        <p className="text-gray-700 text-sm">
        {props.price}
        </p>
        
      </div>
      </div>
    </div>
    
  )
};