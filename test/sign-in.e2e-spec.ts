import { expect, test } from '@playwright/test'

test('sign in successfully', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByLabel('Seu email').fill('johndoe@example.com')

  await page.getByRole('button', { name: 'Acessar painel' }).click()

  const toast = page.getByText(
    'Enviamos um link de autenticação	 para seu e-mail.',
  )

  expect(toast).toBeVisible()
})
test('sign in wrong credentials', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByLabel('Seu email').fill('dopes@example.com')

  await page.getByRole('button', { name: 'Acessar painel' }).click()

  const toast = page.getByText('Credenciais invalidas.')

  expect(toast).toBeVisible()
})
test('navigate tp mew restaurant page', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Novo estabelecimento' }).click()

  expect(page.url()).toContain('/sign-up')
})
