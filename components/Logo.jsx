import {RESTAURANT_NAME} from "@/utils/constants/restaurantInfo";
import Link from "next/link";

const Logo = () => (
	<Link href="/" className="btn btn-ghost normal-case text-xl">
		{RESTAURANT_NAME}
	</Link>
);

export default Logo;