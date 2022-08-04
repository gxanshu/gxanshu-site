import Seo from "components/Seo";
import {Layout, Comment} from 'components'

export default function GustBook() {
  return (
    <Layout styles={{ p: [6, 28], minH: "100vh" }}>
      <Seo
        templateTitle="Guestbook"
        description="leave your comments and thoughts about this site in this page which help us to improve and help us to grow our community online"
      />
      <Comment />
    </Layout>
  );
}
