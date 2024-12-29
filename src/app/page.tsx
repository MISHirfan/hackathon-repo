import Display from "@/components/display";
import  Feature  from "@/components/feature";
import Insta from "@/components/insta"
import ProductGridList from "@/components/product";
import Hero from "@/components/hero";
import BlogGrid from "@/components/blog";
import Cart from "@/components/cart";

 

export default function Home() {
  return (
    <div>
      < Hero />
      <Feature />
      < ProductGridList />
      < Display />
      {/* <MyAccount /> */}
      {/* <Contact /> */}
      <BlogGrid />
      <Cart />
      <Insta />
    </div>
  );
}
