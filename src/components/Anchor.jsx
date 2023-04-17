import { useRouter } from "next/router";
import Anchor from "@/components/Anchor";

export default function Anchor({ children, href, className }) {
  const router = useRouter();

  function handleClick(e) {
    /* prevent from loading first and then return the new page */
    e.preventDefault();
    router.push(href);
  }

  return (
    <a className={className} href={href} onClick={handleClick}>
      {children}
    </a>
  );
}
