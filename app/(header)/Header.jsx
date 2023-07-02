import Menu from "../../components/Menu";
import MenuDropdown from "../../components/MenuDropdown";
import MenuItem from "../../components/MenuItem";
import MobileMenu from "../../components/MobileMenu";
import MobileMenuDropdown from "../../components/MobileMenuDropdown";
import CartDropdown from "./CartDropdown";
import Logo from "./Logo";

const fetchCategories = async () => {
	const response = await fetch(`${process.env.API_URL}/categories`, {
		next: {revalidate: 60}
	});
	return response.json();
};

const Header = async () => {
	const categories = await fetchCategories();

	const getCategoryLinkPath = category => ({
		pathname: "/products",
		query: {category}
	});

	return (
		<header className="navbar bg-base-100">
			<div className="navbar-start">
				<MobileMenu>
					<MenuItem path="/" text="Home" />
					<MobileMenuDropdown text="Menu">
						<MenuItem path="/products" text="All" />
						{categories.map(({name, id}) => (
							<MenuItem key={id} path={getCategoryLinkPath(name)} text={name} />
						))}
					</MobileMenuDropdown>
				</MobileMenu>
				<Logo />
			</div>
			<div className="navbar-center hidden lg:flex">
				<Menu>
					<MenuItem path="/" text="Home" />
					<MenuDropdown text="Menu">
						<MenuItem path="/products" text="All" />
						{categories.map(({name, id}) => (
							<MenuItem key={id} path={getCategoryLinkPath(name)} text={name} />
						))}
					</MenuDropdown>
				</Menu>
			</div>
			<div className="navbar-end">
				<CartDropdown />
			</div>
		</header>
	);
};

export default Header;
