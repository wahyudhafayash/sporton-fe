import priceformatter from "@/app/utils/price-formatter";
import Image from "next/image";
import Button from "./Button";
import { FiArrowRight, FiTrash2 } from "react-icons/fi";
import { useRouter } from "next/navigation";

const cardList = [
  {
    name: "SportsOn Slowlivin",
    category: "Badminton",
    price: 119000,
    qty: 2,
    imgUrl: "product-1.png",
  },
  {
    name: "SportsOn Rockets Tennis",
    category: "Tennis",
    qty: 3,
    price: 999000,
    imgUrl: "product-2.png",
  },
  {
    name: "SportsOn Hyperfast Shoes",
    category: "Running",
    price: 329000,
    qty: 4,
    imgUrl: "product-3.png",
  },
];

const CardPopup = () => {
  const router = useRouter();

  const totalPrice = cardList.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <div className="absolute bg-white right-0 top-12 shadow-xl shadow-black/10 border border-gray-200 w-90 z-10">
      <div className="p-2.5 border-b border-gray-200 font-bold text-center">
        Shopping Card
      </div>
      {cardList.map((item, i) => (
        <div className="border-b border-gray-200 p-4 flex gap-3" key={i}>
          <div className="bg-primary-light aspect-square w-16 flex justify-center items-center">
            <Image
              src={`/images/products/${item.imgUrl}`}
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
          <Button variant="ghost" className="w-7 h-7 p-0! self-center ml-auto">
            <FiTrash2 />
          </Button>
        </div>
      ))}
      <div className="border t border-gray-200 p-4">
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
