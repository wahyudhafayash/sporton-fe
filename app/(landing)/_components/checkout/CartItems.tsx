"use client";
import priceformatter from "@/app/utils/price-formatter";
import Image from "next/image";
import { FiCreditCard, FiTrash2 } from "react-icons/fi";
import Button from "../ui/Button";
import CardWithHeader from "../ui/CardWithHeader";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/app/hooks/use-cart-store";
import { getImageUrl } from "@/app/lib/api";

const CartItems = () => {
  const router = useRouter();
  const { items, removeItem } = useCartStore();

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.qty,
    0,
  );

  return (
    <CardWithHeader title="Cart Items">
      <div className="flex-1 overflow-auto max-h-67.5">
        {items.map((item) => (
          <div
            key={item._id}
            className="border-b border-gray-200 p-4 flex gap-3"
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
                <div>{item.qty}x</div>
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
        ))}
      </div>

      <div className="border-t border-gray-200 p-4">
        <div className="flex justify-between items-center font-semibold">
          <div>Total</div>
          <div className="text-primary text-sm">
            {priceformatter(totalPrice)}
          </div>
        </div>

        <Button
          variant="dark"
          size="small"
          className="w-full mt-4 flex items-center justify-center gap-2"
          onClick={() => router.push("/payment")}
        >
          <FiCreditCard />
          Proceed to Payment
        </Button>
      </div>
    </CardWithHeader>
  );
};

export default CartItems;
