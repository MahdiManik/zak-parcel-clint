import Container from "../../Shared/Container";
import { Title } from "../../Shared/Title";
import img from "../../assets/hom-banner/OIG.jpg";
import img2 from "../../assets/hom-banner/superFast.jpg";
import img3 from "../../assets/hom-banner/support.jpg";

const Feature = () => {
  return (
    <div>
      <Container>
        <Title heading={"Why Chose Our Service"} />
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center lg:grid-cols-3 gap-8 mt-12">
          <div className="card w-96  border-2 border-orange-500 ">
            <figure>
              <img src={img} alt="icon" className="h-60 w-full" />
            </figure>
            <div className="card-body gap-4">
              <h2 className="text-2xl font-semibold text-center mb-2">
                Parcel Safety
              </h2>
              <p>
                Your parcel is in safe hands with our secure delivery system. We
                use advanced tracking technology to monitor your parcels
                location from pickup to delivery. Additionally, all our delivery
                personnel are trained to handle your parcels with care.
              </p>
            </div>
          </div>
          <div className="card w-96  border-2 border-orange-500">
            <figure>
              <img src={img2} alt="icon" className="h-60 w-full" />
            </figure>
            <div className="card-body gap-4">
              <h2 className="text-2xl font-semibold text-center mb-2">
                Super Fast Delivery
              </h2>
              <p>
                We understand that time is of the essence. Thats why we offer
                super fast delivery options to get your parcels to you as
                quickly as possible. We also have a network of strategically
                located warehouses to minimize delivery times.
              </p>
            </div>
          </div>
          <div className="card w-96  border-2 border-orange-500 ">
            <figure>
              <img src={img3} alt="icon" className="h-60 w-full" />
            </figure>
            <div className="card-body gap-4">
              <h2 className="text-2xl font-semibold text-center mb-2">
                Reliable Customer Support
              </h2>
              <p>
                We are committed to providing our customers with the best
                possible experience. Thats why we offer 24/7 customer support to
                answer any questions or concerns you may have. You can also
                track your parcels status in real time through our user-friendly
                app.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Feature;
