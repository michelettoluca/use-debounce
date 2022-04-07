import { useState, useEffect } from "react";

export const useDebounce = (value, wait) => {
	const [debouncedValue, setDebouncedValue] = useState("");
	const [status, setStatus] = useState("done");

	useEffect(() => {
		setStatus("waiting");

		const timeoutRef = setTimeout(() => {
			setDebouncedValue(value);
			setStatus("done");
		}, wait);

		return () => {
			clearTimeout(timeoutRef);
		};
	}, [value, wait]);

	return { debouncedValue, status };
};
