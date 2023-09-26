import ProductsView from "../components/ProductsView/ProductsView";
export default function ProductsPage(){
    return (
    <div className="grid grid-cols-7">
        <ProductsView styles = {"cols-span-3"}/>
    </div>
    );
}