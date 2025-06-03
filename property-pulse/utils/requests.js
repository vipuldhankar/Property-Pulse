const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;
// fetch all properties
async function fetchproperties({ showFeatured = false } = {}) {
       // Handle the case where api domain is not set in environment variables 
       if (!apiDomain) {
              return [];
       }
       try {
              const response = await fetch(
                     `${apiDomain}/api/properties${showFeatured ? '/featured' : ''}`, { cache: 'no-store' }
              );
              if (!response.ok) {
                     throw new Error("failed to fetch data");
              }
              return response.json();
       } catch (error) {
              console.log(error);
              return [];
       }
}
// fetch single properties by id

async function fetchproperty(id) {
       // Handle the case where api domain is not set in environment variables 
       if (!apiDomain) {
              return null;
       }
       try {
              const response = await fetch(
                     `${apiDomain}/api/properties/${id}`
              );
              if (!response.ok) {
                     throw new Error("failed to fetch data");
              }
              return response.json();
       } catch (error) {
              console.log(error);
              return null;
       }
}


export { fetchproperties, fetchproperty };