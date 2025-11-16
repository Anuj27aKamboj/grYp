import { imgURL } from "../../utils/constants";
const ItemListAccordion = ({ items }) => {
  // console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="py-4 border-b border-slate-300"
        >
          {/* Top row: name/price + image */}
          <div className="flex justify-between items-start">
            <div className="flex flex-col">
              <span className="font-medium">{item?.card?.info?.name}</span>
              <span className="text-sm text-slate-600">
                ₹ {item?.card?.info?.price / 100}
              </span>
              <p className="mt-2 text-sm text-slate-700">
                {item?.card?.info?.description}
              </p>
            </div>

            <div className="text-center">
              <img
                src={imgURL + item?.card?.info?.imageId}
                className="w-22 h-22 object-cover rounded-lg"
              />
              <button className="relative -top-4 bg-slate-900 text-white rounded-[10px] px-4.5 py-0.5 mx-auto my-1 z-999 shadow-[0_0_8px_#475569]">
                Add
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemListAccordion;
