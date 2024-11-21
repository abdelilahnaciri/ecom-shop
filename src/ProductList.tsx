import { useEffect } from "react";
import { RootState, useAppDispatch } from "./app/store";
import ProductCard from "./components/ProductCard";
import { IProduct } from "./interface";
import { useSelector } from "react-redux";
import { getProductList } from "./app/features/products/createAsyncThunkEx.ts";
import { useGetProductListQuery } from "./app/features/products/productsSlice.ts";

const ProductList = () => {
  // const dispatch = useAppDispatch();
  // const { loading, data } = useSelector((state: RootState) => state.products);
  // const { isLoading, data } = useCustomQuery({
  //   queryKey: ["productList"],
  //   url: `/products?limit=10&select=title,price,thumbnail`,
  // });

  // if (isLoading) return <h3>Loading...</h3>;

  // useEffect(() => {
  //   dispatch(getProductList());
  // }, [dispatch]);

  const { isLoading, data, error } = useGetProductListQuery({});

  // if (loading)
  if (isLoading) return <h3>Loading...</h3>;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
      {data.products.map((product: IProduct) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
