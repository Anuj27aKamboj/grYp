import { imgURL } from "../../utils/constants";
import { addItem, removeItem } from "../../utils/redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const ItemListAccordion = ({ items }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector((store) => store.cart.items);

  const handleAddItem = (item) => {
    //Dispatch an action
    // console.log(item);
    dispatch(addItem(item));
  };

  const handleRemoveItem = (item) => {
    //Dispatch an action
    // console.log(item);
    dispatch(removeItem(item));
  };
  // console.log(items);
  return (
    <div>
      {items.map((item, index) => (
        <div
          data-testid="menuItem"
          key={item?.card?.info?.id + "_" + index}
          className="py-4 border-b border-slate-300"
        >
          {/* Top row: name/price + image */}
          <div className="grid grid-flow-col">
            <div className="flex flex-col col-span-10">
              <span className="font-medium">{item?.card?.info?.name}</span>
              <span className="text-sm text-slate-600">
                ₹ {item?.card?.info?.price / 100}
              </span>
              <p className="mt-2 text-sm text-slate-700">
                {item?.card?.info?.description}
              </p>
            </div>

            <div className="text-center col-span-1">
              <img
                src={imgURL + item?.card?.info?.imageId}
                className="w-22 h-22 object-cover rounded-lg"
              />
              {cartItems.length !== 0 && (
                <button
                  className="relative -top-4 bg-slate-900 text-white rounded-[10px] px-4.5 py-0.5 mx-auto my-1 z-999 shadow-[0_0_8px_#475569] hover:cursor-pointer"
                  onClick={() => handleRemoveItem(item)}
                >
                  -
                </button>
              )}
              <button
                className="relative -top-4 bg-slate-900 text-white rounded-[10px] px-4.5 py-0.5 mx-auto my-1 z-999 shadow-[0_0_8px_#475569] hover:cursor-pointer"
                onClick={() => handleAddItem(item)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemListAccordion;
