import React from 'react'
import Layout from '../components/layout'

export default function about() {
    return (
        <Layout>
            <p>
                Django Admin is a powerful tool for managing data in your app. However, it was not designed with summary tables and charts in mind. Luckily, the developers of Django Admin made it easy for us to customize.
                We are going to turn Django Admin into a dashboard by adding a chart and a summary table.
            </p>
        </Layout>
    )
}
