import { createClient } from 'next-sanity'

export default createClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    useCdn: true,
    apiVersion: process.env.SANITY_API_VERSION,
});