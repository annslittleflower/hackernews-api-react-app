import {ArticlesList} from "@/features/Articles";
import {Header, Footer, FindOutBlock} from "@/common/components"

const Root = () => {
  return (
    <>
      <Header />
      <ArticlesList />
      <FindOutBlock />
      <Footer />
    </>
  );
}

export default Root