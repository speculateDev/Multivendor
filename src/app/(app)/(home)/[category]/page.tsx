interface Props {
  params: Promise<{
    category: string;
    subcategory?: string;
  }>;
}

async function page({ params }: Props) {
  const { category } = await params;

  return <div>Category: {category}</div>;
}

export default page;
