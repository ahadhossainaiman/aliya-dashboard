import { IoMdAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import img from "../../assets/logo2.png";
import ProductCart from "../../components/ProductCart";

const BoutiqueDetails = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className=" flex justify-between items-center">
        <h1 className="text-[30px] text-[#1E66CA] font-bold">Boutiques</h1>
        <div className="flex flex-col items-center gap-2">
          <p
            onClick={() => navigate("/add-boutiques")}
            className="text-[#1E66CA] font-medium flex cursor-pointer items-center gap-2 border-2 px-5 py-2 rounded-lg border-[#1E66CA]"
          >
            <IoMdAdd size={20} />
            Add New Boutiques
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg mt-[24px] py-3">
        <div className="flex items-center gap-4 border-b-2 px-5 pb-3">
          <img
            className="w-[100px] h-[100px] rounded-full"
            src="https://i.ibb.co/CvNF1q9/image.png"
            alt=""
          />
          <div>
            <div className="flex items-center gap-4 text-[22px] font-medium">
              <h1 className="text-[#1E66CA] font-bold">A1 Boutique</h1>{" "}
              <FaStar className="text-[gold]" /> <span>5.0</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-2 px-5 py-3">
            <ProductCart/>
            <ProductCart/>
            <ProductCart/>
            <ProductCart/>
            <ProductCart/>
            <ProductCart/>
        </div>
      </div>
    </div>
  );
};

export default BoutiqueDetails;
