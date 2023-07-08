import {parseQueryParams} from "@/lib/helpers";
import {
	deleteOrderById,
	getOrderById,
	updateOrderById
} from "@/lib/prisma/orders";

const handler = async (req, res) => {
	if (req.method === "DELETE") {
		try {
			const {id} = parseQueryParams(req.query);

			const order = await deleteOrderById(id);
			res.json(order);
		} catch (e) {
			res.status(500).json({message: "Something went wrong."});
		}
	} else if (req.method === "PUT") {
		try {
			const {id} = parseQueryParams(req.query);
			const {
				clientName,
				clientPhone,
				clientAddress,
				clientId,
				status,
				productIds
			} = req.body;

			const products = productIds?.map(productId => ({
				productId: Number(productId)
			}));

			const order = await updateOrderById(id, {
				clientName,
				clientPhone,
				clientAddress,
				clientId,
				status,
				products
			});

			res.json(order);
		} catch (e) {
			console.log(e);
			res.status(500).json({message: "Something went wrong."});
		}
	} else if (req.method === "GET") {
		try {
			const {id} = parseQueryParams(req.query);

			const order = await getOrderById(id);
			res.json(order);
		} catch (e) {
			res.status(500).json({message: "Something went wrong."});
		}
	}
};

export default handler;
