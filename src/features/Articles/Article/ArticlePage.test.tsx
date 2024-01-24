import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'
import { describe, it, expect, beforeAll, afterAll } from 'vitest'
import ArticlePage from './ArticlePage'

const server = setupServer(
  http.get('*/item/*.json', () => {
    return HttpResponse.json(
      {
        id: 22323,
        title: `Flipper Zero: Multi-Tool Device for Geeks`,
      },
    )
  }),
)

beforeAll(() => server.listen())
afterAll(() => server.close())

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
		},
	},
})
  
const wrapper = ({ children }: { children: ReactNode }) => (
	<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

describe('<ArticlePage />', () => {
  it('fetch data, add one comment', async () => {
    render(<ArticlePage />, { wrapper })

		await waitFor(() => {
			const title = screen.getByTestId('title')
			expect(title.textContent).toBe('Flipper Zero: Multi-Tool Device for Geeks')
		})


		await userEvent.type(screen.getByRole("textbox", {name: 'by'}), 'new user name')
		await userEvent.type(screen.getByRole("textbox", {name: 'text'}), 'comment')
		await userEvent.click(screen.getByText('add comment'))

		const comments = screen.getByTestId('comments')

		expect(comments.children).toHaveLength(1)
  })
})
