import { Helmet } from 'react-helmet-async';

interface HeadProps {
  title?: string;
  description?: string;
}

export function Head({ title = '', description = '' }: HeadProps = {}) {
  return (
    <Helmet title={title ? `${title} | eWallet` : undefined} defaultTitle="eWallet">
      <meta name="description" content={description} />
    </Helmet>
  );
}
