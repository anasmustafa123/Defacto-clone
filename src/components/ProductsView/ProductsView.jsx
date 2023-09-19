import ProductView from "./ProductView"
export default function ProductsView({ProductsView}){
    return (
        <div className="grid grid-cols-4 justify-items-center gap-0 w-3/5 justify-center">
            <ProductView />
            <ProductView />
            <ProductView />
            <ProductView />
            <ProductView />
            <ProductView />
            <ProductView />
        </div>
    )
}