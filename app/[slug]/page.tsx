// https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes
// post.tsx

export default function Page({ params }: { params: { slug: string } }) {
  return <div>My Post: {params.slug}</div>;
}
