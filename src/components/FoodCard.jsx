const FoodCard = ({item:{title,rating,img}}) => {
  return(
    <div className="w-[200px] h-[200px] border bg-slate-100 rounded-sm shadow-md hover:shadow-none hover:scale-105 cursor-pointer transition-all hover:bg-slate-200 text-center m-3">
      <h1>{title}</h1>

    </div>
  );
};

export default FoodCard;
