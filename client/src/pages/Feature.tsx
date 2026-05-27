import { trpc } from "@/lib/trpc";

export function Feature() {
  // tRPC router theke feature list fetch kora hocche
  const { data, isLoading } = trpc.feature.list.useQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Features</h1>
      
      {/* data render kora hocche */}
      <div className="space-y-4">
        {data?.map((item, index) => (
          <div key={index} className="p-4 border rounded shadow-sm">
            {/* item er actual properties ekhane diben jemon: item.title ba item.name */}
            <pre>{JSON.stringify(item, null, 2)}</pre>
          </div>
        ))}
      </div>
    </div>
  );
}