import priceformatter from "@/app/utils/price-formatter";
import Image from "next/image";
import Button from "./Button";
import { FiArrowRight, FiTrash2 } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/app/hooks/use-cart-store";
import { getImageUrl } from "@/app/lib/api";

const CardPopup = () => {
  const router = useRouter();
  const { items, removeItem } = useCartStore();

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.qty,
    0,
  );

  return (
    <div className="absolute bg-white right-0 top-12 shadow-xl shadow-black/10 border border-gray-200 w-90 z-10">
      <div className="p-2.5 border-b border-gray-200 font-bold text-center">
        Shopping Card
      </div>
      {items.length ? (
        items.map((item) => (
          <div
            className="border-b border-gray-200 p-4 flex gap-3"
            key={item._id}
          >
            <div className="bg-primary-light aspect-square w-16 flex justify-center items-center">
              <Image
                src={getImageUrl(item.imageUrl)}
                alt={item.name}
                width={63}
                height={63}
                className="aspect-square object-contain"
              />
            </div>
            <div className="self-center">
              <div className="text-sm font-medium">{item.name}</div>
              <div className="flex gap-3 font-medium text-xs">
                <div className="gap-3 flex font-medium">{item.qty}x</div>
                <div className="text-primary">{priceformatter(item.price)}</div>
              </div>
            </div>

            <Button
              variant="ghost"
              className="w-7 h-7 p-0! self-center ml-auto"
              onClick={() => removeItem(item._id)}
            >
              <FiTrash2 />
            </Button>
          </div>
        ))
      ) : (
        <div className="text-center opacity-50 py-5">
          Your shopping cart is empty
        </div>
      )}
      <div className="border-t border-gray-200 p-4">
        <div className="flex justify-between items-center font-semibold">
          <div className="text-md">Total</div>
          <div className="text-primary text-sm">
            {priceformatter(totalPrice)}
          </div>
        </div>
        <Button
          variant="dark"
          size="small"
          className="w-full mt-4"
          onClick={() => router.push("/checkout")}
        >
          Checkout Now
          <FiArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default CardPopup;
