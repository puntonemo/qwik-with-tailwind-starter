import { component$ } from '@builder.io/qwik';
import { DocumentHead, Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div>
        <h2>Page 2</h2>
        Hello Again, Qwik!
        <p><Link href={"/"}>Home</Link></p>
    </div>
  )
});

export const head: DocumentHead = {
  title: "Page 2",
  meta: [
    {
      name: "page 2",
      content: "page 2 description",
    },
  ],
};
