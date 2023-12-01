import { HomePg } from 'components/HomePg/HomePg';
import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home page</title>
      </Helmet>
      <HomePg />
    </>
  );
}
