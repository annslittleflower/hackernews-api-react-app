import {ArticlesList} from "@/features/Articles";
import {Header, Footer, FindOutBlock} from "@/common/components"

const Root = () => {
  return (
    <>
      <Header />
      <div className="bg-gray-100">
        <ArticlesList />
      </div>
      <FindOutBlock />
      <Footer />
    </>
  );
}

export default Root