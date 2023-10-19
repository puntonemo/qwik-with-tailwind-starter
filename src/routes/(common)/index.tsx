import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h2>Start page</h2>
      <p><Link href={"/page1"}>Page 1</Link></p>
      <p><Link href={"/page2"}>Page 2</Link></p>
    </>
  );
});

export const head: DocumentHead = {
  title: "Home",
  meta: [
    {
      name: "Home description",
      content: "Home page description",
    },
  ],
};
