const priceformatter = (price: number) => {
  const newFormatter = Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumSignificantDigits: 3,
  }).format(price);

  return newFormatter;
};

export default priceformatter;
