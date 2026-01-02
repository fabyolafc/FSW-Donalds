import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProductPage = () => {
  return (
    <div className="p-5 rounded-xl border border-red-500 ">
      <h1 className=" text-red-500 p-5">products page</h1>
      <Button>FSW 7.0</Button> 
      <Input placeholder="Bora fechar esse projeto!" /> 
    </div>
  );
};

export default ProductPage;