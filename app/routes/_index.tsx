import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Layout from '~/components/layout/Layout';
import BasicInfo from '~/pages/BasicInfo';

export default function Page() {
  const navigate = useNavigate();
  const isLoggedIn = true;
  const [returnComponent, setReturnComponent] = useState<React.ReactNode | null>(null);

  useEffect(() => {
    if (isLoggedIn) {
      setReturnComponent(
        <Layout>
          <BasicInfo />
        </Layout>,
      );
    } else {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  return returnComponent;
}
