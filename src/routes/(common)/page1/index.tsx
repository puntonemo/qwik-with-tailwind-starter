import { component$ } from '@builder.io/qwik';
import { DocumentHead, Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div>
        <h2>Page 1</h2>
        Hello Qwik!
        <p><Link href={"/"}>Home</Link></p>
    </div>
  )
});

export const head: DocumentHead = {
  title: "Page 1",
  meta: [
    {
      name: "page 1",
      content: "page 1 description",
    },
  ],
};
