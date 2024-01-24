import ArticlePage from "@/features/Articles/Article/ArticlePage";
import {Header, Footer, FindOutBlock} from "@/common/components"

const Article = () => {
  return (
    <>
      <Header />
			<ArticlePage />
      <FindOutBlock />
      <Footer />
    </>
  );
}

export default Article