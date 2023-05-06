import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

const Notfound404 = () => {
    return ( 
        <div style={{textAlign:'center'}}>
            <Navbar />
            <img style={{maxWidth:'700px', width:'70%', marginBottom:'50px'}} src="/img/404.png" />
            <Footer />
        </div>
    );
}
 
export default Notfound404;