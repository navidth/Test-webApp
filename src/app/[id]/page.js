import EditUser from "@/components/EditUser";

async function page({ params }) {
  const response = await fetch(`https://reqres.in/api/users/${params.id}`)
  const data = await response.json()
  return <EditUser data={data} />;
}

export default page;
