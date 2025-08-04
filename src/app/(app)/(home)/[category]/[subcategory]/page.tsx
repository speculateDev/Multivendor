interface Props {
  params: Promise<{
    category: string;
    subcategory: string;
  }>;
}

async function page({ params }: Props) {
  const { category, subcategory } = await params;

  return (
    <div>
      Category: {category} <br /> Subcategory : {subcategory}
    </div>
  );
}

export default page;
