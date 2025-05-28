import PropertyCard from "@/components/PropertyCard";
import { fetchproperties } from "@/utils/requests";
import { getSessionUser } from '@/utils/getSessionUser';
import cloudinary from '@/config/cloudinary';

const PropertiesPage = async () => {
  const response = await fetchproperties();
  const properties = response.properties || [];  // Access the properties array

  properties.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {properties.length === 0 ? (
          <p>No Properties Found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertiesPage;
