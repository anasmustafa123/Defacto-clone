import ProductsView from "../components/ProductsView/ProductsView";
export default function ProductsPage(){
    return (
    <div className="grid grid-cols-7  dark:bg-stone-900 dark:text-white">
        <ProductsView styles = {"cols-span-3"}/>
    </div>
    );
}