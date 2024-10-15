import { React, useContext } from "react";
import Card from "../Common/Card";
import Container from "./Container";
import OrgContext from "../Context/OrgContext";
import { Link } from "react-router-dom";

const Properties = () => {
  const { product, filterProduct } = useContext(OrgContext);

  return (
    <div className="py-[100px]">
      <Container>
        {/* heading */}
        <div>
          <h5 className="font-Nunito font-bold text-secondaryColor text-base uppercase">
            properties
          </h5>
          <h3 className="font-Nunito font-bold text-primaryColor text-[40px]">
            Our Latest Properties
          </h3>
          <p
            className="font-Nunito text-base font-normal
           text-thirdColor max-w-[529px]"
          >
            We are very proud of the service we provide. See what our guests
            have to say about us, our locations and services.
          </p>
        </div>
        {/* all tabs */}
        <div className="flex items-center justify-end">
          <ul className="flex items-center gap-x-10">
            {["properties", "Houses", "Apartments", "Sales"].map(
              (item, index) => (
                <li key={index}>
                  <a
                    className="font-Nunito hover:text-secondaryColor transition-all font-bold text-xl text-primaryColor capitalize"
                    href="#"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
        {/* all card */}
        <div className="pt-10 flex items-center justify-between flex-wrap gap-y-8">
          {product.map((el) => {
            return (
              <Link key={el.id}>
                <Card item={el} />
              </Link>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Properties;
