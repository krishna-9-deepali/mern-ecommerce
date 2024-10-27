import React from "react";
import { Button } from "@/components/ui/button";
import bannerOne from "../../assets/banner-1.webp";
import bannerTwo from "../../assets/banner-2.webp";
import bannerThree from "../../assets/banner-3.webp";
import levis from "../../assets/levis.webp";
import nike from "../../assets/nike.webp";
import puma from "../../assets/puma.webp";
import scachers from "../../assets/scachers.webp";
import tomhillfiger from "../../assets/tom-hillfiger.webp";
import uspolo from "../../assets/us-polo.webp";
import footwearman from "../../assets/footwaerman.webp";
import footwearwoman from "../../assets/footwaerwoman.webp";
import gromming from "../../assets/gromming.webp";
import headphone from "../../assets/headphone.webp";
import jewllery from "../../assets/jewwlery.webp";
import westernwaer from "../../assets/westernwaer.webp";
import activewear from "../../assets/activewear.webp";
import bagswallet from "../../assets/bagswallet.webp";
import kids from "../../assets/kids.webp";

import {
  Airplay,
  BabyIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CloudLightning,
  Heater,
  Images,
  Shirt,
  ShirtIcon,
  ShoppingBasket,
  UmbrellaIcon,
  WashingMachine,
  WatchIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllFilteredProducts,
  fetchProductDetails,
} from "@/store/shop/products-slice";
import ShoppingProductTile from "@/components/shopping-view/product-tile";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
import ProductDetailsDialog from "@/components/shopping-view/product-details";
import { getFeatureImages } from "@/store/common-slice";
// import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
// import ProductDetailsDialog from "@/components/shopping-view/product-details";
// import { getFeatureImages } from "@/store/common-slice";

const categoriesWithIcon = [
  { id: "manfootwear", label: "Men", icon: ShirtIcon, img: footwearman },
  {
    id: "womenfootwear",
    label: "Women",
    icon: CloudLightning,
    img: footwearwoman,
  },
  { id: "westernwear", label: "Kids", icon: BabyIcon, img: westernwaer },
  { id: "headphone", label: "Accessories", icon: WatchIcon, img: headphone },
  { id: "gromming", label: "Footwear", icon: UmbrellaIcon, img: gromming },
  { id: "jewellery", label: "Footwear", icon: UmbrellaIcon, img: jewllery },
  { id: "Activewear", label: "Footwear", icon: UmbrellaIcon, img: activewear },
  {
    id: "bagsbelt&walle",
    label: "Footwear",
    icon: UmbrellaIcon,
    img: bagswallet,
  },
  { id: "kids", label: "Footwear", icon: UmbrellaIcon, img: kids },
];

const brandsWithIcon = [
  { id: "nike", label: "Nike", img: nike },
  { id: "puma", label: "Puma", img: puma },
  { id: "levi", label: "Levi's", img: levis },
  { id: "skechers", label: "skechers", img: scachers },
  { id: "tommyhilfigre", label: "tommyhilfigre", img: tomhillfiger },
  { id: "uspoloassn", label: "U.S. Polo Assn.SINCE 1890", img: uspolo },
];

function ShoppingHome() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { productList, productDetails } = useSelector(
    (state) => state.shopProducts
  );
  const { featureImageList } = useSelector((state) => state.commonFeature);

  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);

  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();
  function handleNavigateToListingPage(getCurrentItem, section) {
    sessionStorage.removeItem("filters");
    const currentFilter = {
      [section]: [getCurrentItem.id],
    };

    sessionStorage.setItem("filters", JSON.stringify(currentFilter));
    navigate(`/shop/listing`);
  }
  function handleGetProductDetails(getCurrentProductId) {
    dispatch(fetchProductDetails(getCurrentProductId));
  }
  function handleAddtoCart(getCurrentProductId) {
    dispatch(
      addToCart({
        userId: user?.id,
        productId: getCurrentProductId,
        quantity: 1,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchCartItems(user?.id));
        toast({
          title: "Product is added to cart",
        });
      }
    });
  }
  useEffect(() => {
    if (productDetails !== null) setOpenDetailsDialog(true);
  }, [productDetails]);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % featureImageList.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [featureImageList]);

  useEffect(() => {
    dispatch(
      fetchAllFilteredProducts({
        filterParams: {},
        sortParams: "price-lowtohigh",
      })
    );
  }, [dispatch]);
  console.log(productList);
  useEffect(() => {
    dispatch(getFeatureImages());
  }, [dispatch]);
  console.log(featureImageList, "featureImageList");
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative w-full  overflow-hidden">
        <img src={bannerOne} />
        {featureImageList && featureImageList?.length > 0
          ? featureImageList?.map((slide, index) => (
              <img
                src={slide?.image}
                key={index}
                className={`${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                } absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000`}
              />
            ))
          : null}
        <Button
          variant="outline"
          size="icon"
          onClick={() =>
            setCurrentSlide(
              (prevSlide) =>
                (prevSlide - 1 + featureImageList.length) %
                featureImageList.length
            )
          }
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80"
        >
          <ChevronLeftIcon className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() =>
            setCurrentSlide(
              (prevSlide) => (prevSlide + 1) % featureImageList.length
            )
          }
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80"
        >
          <ChevronRightIcon className="w-4 h-4" />
        </Button>
      </div>
      <section className="py-12 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 tracking-widest uppercase">
            Shop By Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 lg:gap-0">
            {categoriesWithIcon.map((categoryItem) => (
              <Card
                onClick={() =>
                  handleNavigateToListingPage(categoryItem, "category")
                }
                className="cursor-pointer hover:shadow-lg transition-shadow rounded-none border-none"
              >
                <CardContent className="flex flex-col items-center justify-center  p-6 lg:p-4">
                  <img
                    src={categoryItem.img}
                    alt={categoryItem.label}
                    className="w-full rounded-none object-cover "
                  />

                  <span className="font-bold">{categoryItem.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 tracking-widest uppercase">
            Shop by Brand
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-x-8 lg:gap-y-0">
            {brandsWithIcon.map((brandItem) => (
              <Card
                onClick={() => handleNavigateToListingPage(brandItem, "brand")}
                className="cursor-pointer hover:shadow-lg transition-shadow rounded-none outline-none border-none"
              >
                <CardContent className="flex flex-col items-center justify-center p-6 bg-gray-100">
                  <img
                    src={brandItem.img}
                    alt={brandItem.label}
                    className="  object-cover "
                  />

                  <span className="font-bold">{brandItem.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 tracking-widest uppercase">
            Feature Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productList && productList.length > 0
              ? productList.map((productItem) => (
                  <ShoppingProductTile
                    handleGetProductDetails={handleGetProductDetails}
                    product={productItem}
                    handleAddtoCart={handleAddtoCart}
                  />
                ))
              : null}
          </div>
        </div>
      </section>
      <ProductDetailsDialog
        open={openDetailsDialog}
        setOpen={setOpenDetailsDialog}
        productDetails={productDetails}
      />
    </div>
  );
}

export default ShoppingHome;
