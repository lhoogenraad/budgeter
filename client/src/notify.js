import { toast } from "react-toastify";

const notify = (msg) => {
	toast(msg, { position: toast.POSITION.TOP_CENTER });
}

export default notify;
