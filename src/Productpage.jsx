import { useEffect } from "react";
import Product from "./components/Product";

const Productpage = () => {
    useEffect(() => {
      
        window.scrollTo({ top: 0, behavior:'smooth' });
        
    }, [])
    return(
        <>
            <section className="inner-page">
                <div className="container">
                    <div className="row">
                        <h1>Products</h1>
                    </div>
                </div>
            </section>
            <Product/>
        </>
    )
}

export default Productpage;