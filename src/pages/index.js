import React from 'react';
import Layout from '../components/layout';
import { ExampleButton } from '../components/button';

export default function Home() {
  return (
    <div>
      <Layout>
        <p> How to turn Django Admin into a lightweight dashboard</p>
        <ExampleButton>Example button</ExampleButton>
      </Layout>
    </div>
  );
}
