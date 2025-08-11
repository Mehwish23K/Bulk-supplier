import ProductBox from "../../common/ProductBox";

const ProductShowCase = () => {
  return (
    <section className="py-12 font-jakarta">
      <div className="container mx-auto px-4">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row gap-4">
          {/* Large Watch Box (left side) - full height */}
          <div className="flex-1 h-[600px] md:h-[678px]">
            <ProductBox 
              src="/images/pngegg (1) 1.png"
              alt="Leather Belts Collection"
              title="Leather Belts"
              items={["Dress Belts", "Casual Belts", "Reversible Belts", "Braided Belts", "Western Belts"]}
              imagePosition="bottom"
              bgColor="bg-stone-100"
              className="h-full"
            />
          </div>

          {/* Right Column (Wallet and Bag) */}
          <div className="flex-1 flex flex-col gap-4">
            {/* Wallet Box (top right) */}
            <div className="h-[330px]">
              <ProductBox 
                src="/images/pngegg 1.png"
                alt="Wallets Collection"
                title="Wallets"
                items={["Bifold Wallets", "Trifold Wallets", "Zipper Wallets"]}
                imagePosition="right"
                bgColor="bg-stone-100"
                className="h-full"
              />
            </div>

            {/* Bag Box (bottom right) */}
            <div className="h-[330px]">
              <ProductBox 
                src="/images/pngegg (2) 1.png"
                alt="Bags Collection"
                title="Bags"
                items={["Tote Bags", "Backpacks", "Duffel Bags"]}
                imagePosition="right"
                bgColor="bg-stone-100"
                className="h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowCase;