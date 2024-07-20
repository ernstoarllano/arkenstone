import { redirect } from 'next/navigation'

/**
 * Home page that redirects to the jobs page.
 *
 * @returns {Promise<void>} A promise that resolves when the redirect is complete.
 */
export default async function HomePage() {
  redirect('/jobs')
}
