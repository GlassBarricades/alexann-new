import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom'
import HomePage from './pages/HomePage'
import LayoutPage from './components/LayoutPage'
import CatalogPage from './pages/CatalogPage'
import AdminPage from './pages/AdminPage'
import AdminLayout from './components/AdminLayout'
import { fetchCategories } from './store/categoriesSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import AdminVendors from './components/admin/AdminVendors'
import AdminCollection from './components/admin/AdminCollection'
import AdminColors from './components/admin/AdminColors'

const App = () => {
	const categories = useSelector(state => state.categories.categories)
	const dispatch = useDispatch()
	console.log(categories)
	useEffect(() => {
		dispatch(fetchCategories())
	}, [dispatch])

	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route path='/' element={<LayoutPage />}>
					<Route index element={<HomePage />} />
					<Route path='catalog' element={<CatalogPage />} />
					{/* <Route path='/order' element={<OrderPage />} />
					<Route path='/contacts' element={<ContactPage />} />
					<Route
						path='/stock'
						element={<PromotionPage />}
						loader={promoLoader}
					/>
					<Route path='menu' element={<MenuPage />}>
						<Route
							index
							element={<MenuGridCategory categories={categories}/>}
						/>
						<Route
							path=':category'
							element={<CategoryPage />}
							loader={categoryLoader}
						/>
						<Route
							path=':category/tabs/:tabValue'
							element={<CategoryPage />}
							loader={categoryLoader}
						/>
						<Route
							path=':category/:product'
							element={<ProductPage />}
							loader={productLoader}
						/>
						<Route
							path=':category/tabs/:tabValue/:product'
							element={<ProductPage />}
							loader={productLoader}
						/>
					</Route>
				</Route>
				<Route
					path='admin'
					element={
						<RequireAuth>
							<AdminLayout />
						</RequireAuth>
					}
				>
					<Route
						index
						element={
							<RequireAuth>
								<AdminStats />
							</RequireAuth>
						}
					/>
					<Route
						path=':adminElement'
						element={
							<RequireAuth>
								<AdminMain />
							</RequireAuth>
						}
					/>
					<Route
						path='category/:categoryElement'
						element={
							<RequireAuth>
								<AdminCategory />
							</RequireAuth>
						}
					/>
					<Route
						path='units'
						element={
							<RequireAuth>
								<AdminUnits />
							</RequireAuth>
						}
					/>
					<Route
						path='promo'
						element={
							<RequireAuth>
								<PromotionAdmin />
							</RequireAuth>
						}
					/> */}
				</Route>
				<Route path='/admin' element={<AdminLayout />}>
					<Route index element={<AdminPage />}/>
					<Route path=":category" element={<AdminVendors />} />
					<Route path=":category/:vendor" element={<AdminCollection />} />
					<Route path=":category/:vendor/:collection" element={<AdminColors />} />
				</Route>
				{/* <Route path={'/login'} element={<LoginPage />} /> */}
			</>
		)
	)

	return <RouterProvider router={router}></RouterProvider>
}
export default App
